"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Page() {
  const session = useSession();
  const [Loading, setLoading] = React.useState(true);
  // console.log(session.data?.user?.email)
  if (session.data?.user?.email) {
    setLoading(false);
    return redirect(`/dashboard/${session.data.user.email}`);
  } else {
    Loading ?? <><p>Loading.................. </p></>
  }
}
