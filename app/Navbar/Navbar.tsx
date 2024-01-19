import Image from "next/image";
import Link from "next/link";
import { FaList } from "react-icons/fa";

export default function navbar() {
  const links = <>
    <li><Link className="rounded-none" href="/">Home</Link></li>
    <li><Link className="rounded-none" href="/allBooks">All Books</Link></li>
    <li><Link className="rounded-none" href="/blogs">Blogs</Link></li>
    <li><Link className="rounded-none" href="#">Test</Link></li>
  </>
  return (
    <div className="navbar z-20 bg-transparent md:bg-gradient-to-r md:from-[#4a8ab8] to md:bg-[#34c1ce]  py-5 md:px-10 sticky text-black md:text-white top-0 rounded-b-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaList/>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <Link href="/"><Image height={56} width={56} src="https://i.ibb.co/zZ66BxY/In-Shot-20240118-165615156.png" alt="logo"/></Link>
          <Link href="/"><h1 className="text-lg md:text-3xl font-bold ml-2">BookWarp</h1></Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login"><button className="btn btn-outline text-black md:text-white">Login</button></Link>
      </div>
    </div>
  );
}
