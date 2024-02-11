"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const session = useSession();
  const email = session.data?.user?.email;
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    axios
      .get(`https://bookwarp-server.vercel.app/users/${email}`)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      });
  }, [email]);

  console.log(users?.role);

  const adminRoutes = (
    <ul>
      <li>
        <Link
          href={`/dashboard/${email}`}
          className="w-full mt-2 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href={`/dashboard/${email}/addBook`}
          className="w-full mt-2 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Add Book
        </Link>
      </li>
      <li>
        <Link
          href={`/dashboard/${email}/addUser`}
          className="w-full mt-2 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Add User
        </Link>
      </li>
      <li>
        <Link
          href={`/dashboard/${email}/addCategory`}
          className="w-full mt-2 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Add Category
        </Link>
      </li>
    </ul>
  );

  const userRoutes = (
    <ul>
      <li>
        <Link
          href={`/dashboard/${email}`}
          className="w-full mt-2 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={`/dashboard/${email}/payment`}
          className="w-full mt-2 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Buying History
        </Link>
      </li>
      <li>
        <Link
          href={`/dashboard/${email}/wishlist`}
          className="w-full mt-2 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Wishlist
        </Link>
      </li>

      <li>
        <Link
          href={`/dashboard/${email}/bookmark`}
          className="w-full mt-2 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Bookmark
        </Link>
      </li>
    </ul>
  );

  return (
    <div className=" max-h-screen bg-white dark:bg-black">
      <div className="w-full  bg-gray-200 dark:bg-slate-700 mt-24 h-[90vh]">
        <div
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
         {users?.role === "admin" ? adminRoutes : userRoutes}
        </div>
        <Link href={'/'} className="btn flex items-center justify-center mx-4 mt-96 text-black bg-white dark:text-white dark:bg-black">Go to Home</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
