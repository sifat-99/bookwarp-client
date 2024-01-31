'use client';
/* eslint-disable @next/next/no-img-element */
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CurrentUser from "@/app/CurrntUser";

export default function Profile() {


  const current = CurrentUser();
  console.log(current)
  const {name, image, email, role, address, phone,bloodGroup} = current as any;

  return (
    <div className="flex gap-6 h-[50svh] w-full mt-12">
      <div className="w-full  text-white dark:text-black border-2 rounded-md">
        <div className="flex justify-between  bg-white dark:bg-black p-4">
          <div className="flex items-end gap-4">
            <div className="p-1 border shadow-md rounded-xl">
              <Image
              height={36}
              width={36}
              src={image || ""}
              alt="logo"
              className="rounded-full"
            />
            </div>
            <h2 className="pb-2 text-2xl font-semibold text-black dark:text-white">{name}</h2>
          </div>
          <div className="flex items-end gap-3">
          <FaBell />
            <Link
              href={`/dashboard/profile/${email}`}
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
