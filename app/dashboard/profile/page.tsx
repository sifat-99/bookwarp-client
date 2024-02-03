'use client';
/* eslint-disable @next/next/no-img-element */
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CurrentUser from "@/app/CurrentUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Profile() {

  const [users, setUsers] = useState<any>();
  const session = useSession();




 

  useEffect(() => {
    axios
      .get(`https://bookwarp-server.vercel.app/users/${session.data?.user?.email}`)
      .then((res) => {
        setUsers(res.data);
      });
  }
  , [session]);

  
console.log(users)

  return (
    <div className="flex gap-6 h-[50svh] w-full mt-12">
      <div className="w-full  text-white dark:text-black border-2 rounded-md">
        <div className="flex justify-between  bg-white dark:bg-black p-4">
          <div className="flex items-end gap-4">
            <div className="p-1 border shadow-md rounded-xl">
              <img className="w-[200px] h-[200px] rounded-full" src={users?.image} alt="" />
            </div>
            <h2 className="pb-2 text-2xl font-semibold text-black dark:text-white">{users?.name}</h2>
          </div>
          <div className="flex items-end gap-3">
          <FaBell />
            <Link
              href={`/dashboard/profile/${users?.email}`}
              className="bg-black dark:bg-white px-6 rounded py-1 text-white dark:text-black font-medium"
            >
              Edit Profile
            </Link>
          </div>
        </div>
       
      </div>
      {/* second */}
     
    </div>
  );
}
