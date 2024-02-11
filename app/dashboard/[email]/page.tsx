"use client";
import { useEffect, useState } from "react";
import Content from "./DashboardContents/Content";
import axios from "axios";

export default function Page(props: any) {
  const email = props.params.email;
  const [users, setUsers] = useState<any>();

  console.log(email);

  useEffect(() => {
    axios
      .get(`https://bookwarp-server.vercel.app/users/${email}`)
      .then((res) => {
        setUsers(res.data);
      });
  }, [email]);

  if (!users) {
    return (
      <div className=" flex flex-col gap-4 items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-black border-dashed rounded-full animate-spin dark:border-violet-700"></div>
        <h1 className=" text-black dark:text-white">Loading............</h1>
      </div>
    );
  }

  if (users?.role === "admin") {
    return (
      <div className="flex items-center justify-center h-[90vh]">
        {/* this section is for admin, all admin content will be hare */}
        <h1>Welcome to Admin Profile</h1>
      </div>
    );
  }

  return (
    <div>
      {/* This section is for normal user, all user dashboard data will be hare */}
      <h1>this is for users</h1>
    </div>
  );
}
