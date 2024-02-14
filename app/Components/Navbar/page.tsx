/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaList } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";
import { useEffect, useState } from "react";
import axios from "axios";
import { sessionStatus } from "@/utils/session";
import { usePathname } from 'next/navigation'
import CurrentUser from "@/app/CurrentUser";


export default function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const session = useSession();
  console.log(session);
  const userEmail = session?.data?.user?.email;
  const [users, setUsers] = useState<any>();
  // const [style, setStyle] = useState({});

  console.log(session.data?.user?.email);
  const currentPage = usePathname()

const current = CurrentUser();

console.log(current)





//  useEffect(() => {
//     const currentActiveStyle = () => {
//       if (currentPage === "/") {
//         setStyle({ color: "black" });
//       }
//       if (currentPage === "/allBooks") {
//         setStyle({ color: "black" });
//       }
//       if (currentPage === "/blogs") {
//         setStyle({ color: "black" });
//       }
//       if (currentPage === "/bookmark") {
//         setStyle({ color: "black" });
//       }
//       if (currentPage === "/addBook") {
//         setStyle({ color: "black" });
//       }
//     };
//     currentActiveStyle();
//   }
//   , [currentPage]);





 

  
  // console.log(users);

  useEffect(() => {

setUsers(current);

    if (session.data?.user?.email) {
      console.log(sessionStatus);
      console.log(session);
      axios.post("https://bookwarp-server.vercel.app/users", {
        email: session?.data?.user?.email as string,
        name: session?.data?.user?.name as string,
        image: session?.data?.user?.image as string,
        role: "user",
        address: {
          division: "",
          district: "",
        },
        bloodGroup: "",
        phone: "123",
      });
    }
  }, [current, session, userEmail]);

  console.log(users?.image);

  const handleSignOut = () => {
    signOut();
  };

  const fullName = users?.name;

  let lastName = "";
  if (fullName) {
    const nameParts = fullName.split(" ");
    lastName = nameParts[nameParts.length - 1];
  }

  const links = (
    <>
      <li>
        <Link className={currentPage == '/' ?" bg-black dark:bg-white text-white dark:text-black dark:lg:text-black font-bold": "bg-transparent font-bold text-black lg:text-white dark:text-white "}  href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={currentPage == '/allBooks' ?" bg-black dark:bg-white text-white dark:text-black font-bold": "bg-transparent text-black font-bold lg:text-white dark:text-white "} href="/allBooks">
          All Books
        </Link>
      </li>
      <li>
        <Link className={currentPage == '/blogs' ?" bg-black dark:bg-white text-white dark:text-black font-bold": "bg-transparent text-black font-bold lg:text-white dark:text-white "}  href="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className={currentPage == '/bookmark' ?" bg-black dark:bg-white text-white dark:text-black font-bold": "bg-transparent text-black font-bold lg:text-white dark:text-white "}  href="/bookmark">
          Bookmarks
        </Link>
      </li>
      <li>
        {
          users?.role === "admin" ? (
            <Link className={currentPage == '/addBook' ?" bg-black dark:bg-white text-white dark:text-black font-bold": "bg-transparent text-black font-bold lg:text-white dark:text-white "}  href="/addBook">
              Add Book
            </Link>
          ) : (
            ""
          )
          // <Link className="rounded-none" href="/addBook">
          //   Add Book
          // </Link>
        }
      </li>
    </>
  );

  return (
    <div className="navbar z-20 bg-white  md:bg-gradient-to-r md:from-[#4a8ab8] to md:bg-[#34c1ce]  py-5 md:px-10 sticky dark:bg-gradient-to-r dark:from-[#0d0d0d] to dark:bg-[#010101] text-black dark:text-white md:text-white top-0 rounded-b-lg dark:border-2 border-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaList />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-black md:bg-base-100 text-black rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <Link href="/">
            <Image
              height={56}
              width={56}
              src="https://i.ibb.co/zZ66BxY/In-Shot-20240118-165615156.png"
              alt="logo"
            />
          </Link>
          <Link href="/">
            <h1 className="text-lg md:text-3xl font-bold ml-2 hidden md:block">
              BookWarp
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <div>
          {session.data?.user?.email ? (
            <div className="dropdown dropdown-end  flex justify-center items-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <p className="btn bg-transparent hover:bg-transparent border-none rounded-full text-4xl text-black dark:text-white cursor-pointer">
                  <ThemeSwitch />
                </p>
                <p>{lastName}</p>
              </div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-black dark:border-white"
                    src={users?.image}
                    alt="profile"
                  />
                </div>

                <ul
                  tabIndex={0}
                  className=" mt-52 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] rounded-box w-64 dark:bg-gradient-to-r dark:from-[#0d0d0d] to dark:bg-[#010101] text-black dark:text-white"
                >
                  <li className=" rounded-lg mt-2 flex items-center justify-center text-center text-white">
                    <p className="text-wrap">{users?.name}</p>
                  </li>
                  <li className="border rounded-lg mt-2 flex items-center justify-center text-center text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                    <Link
                      href={"/dashboard/profile"}
                      className="justify-center w-full text-center flex"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="border rounded-lg mt-2 flex items-center justify-center text-white text-center hover:bg-black dark:hover:bg-white dark:hover:text-black">
                    <Link
                      href={`/dashboard/${users?.email}`}
                      className="justify-center w-full text-center flex"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="border rounded-lg mt-2 flex items-center text-white justify-center text-center hover:bg-black dark:hover:bg-white dark:hover:text-black">
                    <button
                      onClick={handleSignOut}
                      className="justify-center w-full text-center flex"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-8">
              <p className="btn bg-transparent hover:bg-transparent border-none rounded-full text-4xl text-black dark:text-white cursor-pointer">
                <ThemeSwitch />
              </p>
              <Link title="Login" href="/login">
                <button className="btn btn-circle btn-lg border text-white bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] rounded-full">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
