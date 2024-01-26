'use client';
/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  const session = useSession();
  const userEmail = session.data?.user?.email as string;
  const userName = session.data?.user?.name as string;
  const userImage = session.data?.user?.image;

  return (
    <div className="flex gap-6 h-[50svh] w-full mt-12">
      <div className="w-full  text-white dark:text-black">
        <div className="flex justify-between  bg-white p-4">
          <div className="flex items-end gap-4">
            <div className="p-1 border shadow-md rounded-xl">
              <Image
              height={36}
              width={36}
              src={userImage || ""}
              alt="logo"
              className="rounded-full"
            />
            </div>
            <h2 className="pb-2 text-2xl font-semibold">{userName}</h2>
          </div>
          <div className="flex items-end gap-3">
          <FaBell />
            <Link
              href={`/dashboard/profile/${userEmail}`}
              className="bg-black px-6 rounded py-1 text-white font-medium"
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
