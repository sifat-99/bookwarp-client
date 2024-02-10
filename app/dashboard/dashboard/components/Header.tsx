/* eslint-disable @next/next/no-img-element */
"use client";
import ThemeSwitch from "@/app/Components/Navbar/ThemeSwitch";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [users, setUser] = useState<any>();

  const session = useSession();
  const userEmail = session.data?.user?.email;
  useEffect(() => {
    axios
      .get(`https://bookwarp-server.vercel.app/users/${userEmail}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [userEmail]);

  const handleSignOut = () => {
    console.log("signing out");
  };

  const fullName = users?.name;

  let lastName = "";
  if (fullName) {
    const nameParts = fullName.split(" ");
    lastName = nameParts[nameParts.length - 1];
  }

  return (
    <div className="fixed w-full">
      <div
        className="flex basis-full items-center w-full bg-gray-200 dark:bg-black text-black py-8 mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="me-5 ">
          <div
            className="flex-none text-xl font-semibold text-black dark:text-white"
            aria-label="Bookwarp"
          >
            Bookwarp
          </div>
        </div>

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="sm:hidden">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          <div className="hidden sm:block">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </button>

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
                      className=" mt-52 z-[1] p-2 shadow menu menu-sm dropdown-content text-black  rounded-box w-64 dark:bg-gradient-to-r dark:from-[#0d0d0d] to dark:bg-[#010101]  dark:text-white"
                    >
                      <li className=" rounded-lg mt-2 flex items-center justify-center text-center text-white">
                        <p className="text-wrap text-black dark:text-white">{users?.name}</p>
                      </li>
                      <li className="border rounded-lg mt-2 flex items-center justify-center text-center text-white hover:bg-black  dark:hover:bg-white dark:hover:text-black">
                        <Link
                          href={"/dashboard/profile"}
                          className="justify-center w-full text-center flex text-black dark:text-white hover:text-white dark:hover:text-black"
                        >
                          Profile
                        </Link>
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
      </div>
    </div>
  );
};

export default Header;
