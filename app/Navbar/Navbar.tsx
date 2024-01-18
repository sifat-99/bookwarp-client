import Link from "next/link";
import { FaList } from "react-icons/fa";

export default function navbar() {
  const links = <>
    <li><Link className="rounded-none" href="/">Home</Link></li>
    <li><Link className="rounded-none" href="#">Test</Link></li>
    <li><Link className="rounded-none" href="/blogs">Blogs</Link></li>
    <li><Link className="rounded-none" href="#">Test</Link></li>
  </>
  return (
    <div className="navbar z-20 bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] py-5 md:px-10 sticky text-white top-0 rounded-b-lg">
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
          <img className="w-14" src="https://i.ibb.co/zZ66BxY/In-Shot-20240118-165615156.png" alt="logo"/>
          <h1 className="text-lg md:text-3xl font-bold ml-2">BookWarp</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login"><button className="btn btn-neutral">Login</button></Link>
      </div>
    </div>
  );
}
