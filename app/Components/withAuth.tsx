/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {sessionStatus} from "@/utils/session"
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function withAuth(Component:any) {
    return function withAuthComponent(props:any) {
        const session = sessionStatus;
        useEffect(() => {
            if(!session){
                redirect("/login")
            }
        }, [session])

        if(!session) {return null;}

        return <Component {...props} />
    }
}
