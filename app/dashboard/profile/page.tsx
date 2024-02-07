'use client';
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import App from "@/app/tsParticles";

export default function Profile() {

  const [users, setUsers] = useState<any>();
  const session = useSession();


  const myStyle = {
    background: "rgba(88, 130, 193, 0.28)",
    fontSize: "16px",
    border: "3px solid rgba(88, 130, 193, 0.49)",
    borderRadius: "12px",
    blur: "12.5px",
  };

 

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
    <div className="h-screen flex items-center justify-center">
      <App />
      <div className=" flex gap-6 z-10 w-2/3 mx-auto mb-32 shadow-2xl">
      <div  className="w-full  text-white dark:text-black border-2 rounded-xl">
        <div style={myStyle} className="flex justify-between flex-col lg:flex-row bg-white dark:bg-black p-4">
          <div className="flex items-center rounded-xl lg:items-start flex-col lg:flex-row  gap-8">
            <div className="border  shadow-2xl rounded-full">
              <Image className="rounded-full w-72 h-72" placeholder="empty" src={users?.image} height={1000} width={1000} quality={100}  alt="profile"/>
            </div>
            <div >
            <h2 className="pb-2 text-2xl font-semibold text-black dark:text-white rounded-lg p-4">Name: {users?.name}</h2>
            <h1 className="pb-2 text-sm font-semibold text-black dark:text-white rounded-lg p-2 mt-4">Email: {users?.email}</h1>
            <h1 className="pb-2 text-sm font-semibold text-black dark:text-white rounded-lg p-2 mt-4">Phone: {users?.phone}</h1>
            <h1 className="pb-2 text-sm font-semibold text-black dark:text-white rounded-lg p-2 mt-4">Address: {users?.address?.division}, {users?.address?.district}</h1>
            </div>
          </div>
          <div className="flex items-center lg:items-end justify-center  mt-4 gap-3">
          {/* <p className="text-black"><FaBell /></p> */}
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
    </div>
  );
}
