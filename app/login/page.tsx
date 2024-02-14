"use client";
import React, { useContext, useEffect, useState } from "react";
import App from "../tsParticles";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaHandPointDown } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { signIn, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const session = useSession();

  console.log(session)

  // const location = window?.location?.href || '/';

  // const previousLocation = location?.split("/")[3];
  // console.log(previousLocation)

  const myStyle = {
    background: "rgba(88, 130, 193, 0.28)",
    fontSize: "16px",
    border: "3px solid rgba(88, 130, 193, 0.49)",
    borderRadius: "12px",
    blur: "12.5px",
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
  
    try {
      // Call signIn function
      await signIn("credentials", {
        email,
        password,
        redirect: true,
      })
  
      // Optionally, you can also navigate to a different page after successful login
      // window.location.href = "/dashboard"; // Example navigation
  
    } catch (error) {
      // Handle any errors that occur during login
      console.error("Login error:", error);
      // Optionally, you can show an alert for login failure as well
      // alert("Login failed. Please try again."); 
    }
  };
  

  const handleGoogleLogin = async () => {
    try {
      // Call signIn function for Google login
      await signIn("google");
  
      // If Google login succeeds, show alert
      session ?? Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are logged in successfully, Redirecting to home page",
        timer: 2000,
        showConfirmButton: true,
      }).then(() => {
        window.location.href = `/`;
      }
      );

      // Optionally, you can also navigate to a different page after successful login
      // window.location.href = "/dashboard"; // Example navigation
  
    } catch (error) {
      // Handle any errors that occur during Google login
      console.error("Google login error:", error);
      // Optionally, you can show an alert for login failure as well
      // alert("Google login failed. Please try again."); 
    }
  };
  

  const handleGithubLogin = async() => {
    // console.log("github login");
  
    try {
      // Call signIn function for GitHub login
      await signIn("github", { callbackUrl: "/" })
  
      // If Google login succeeds, show alert
    await session ?? Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are logged in successfully, Redirecting to home page",
        timer: 2000,
        showConfirmButton: true,
      }).then(() => {
        window.location.href = `/`;
      }
      );
  
      // Optionally, you can also navigate to a different page after successful login
      // window.location.href = "/dashboard"; // Example navigation
  
    } catch (error) {
      // Handle any errors that occur during Google login
      console.error("Google login error:", error);
      // Optionally, you can show an alert for login failure as well
      // alert("Google login failed. Please try again."); 
    }
    

  };

  const handleFacebookLogin = async() => {
    // console.log("facebook login");
    try {
      // Call signIn function for Google login
      await signIn("facebook", { callbackUrl: "/" })
  
      // If Google login succeeds, show alert
    await session ??  Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are logged in successfully, Redirecting to home page",
        timer: 2000,
        showConfirmButton: true,
      }).then(() => {
        window.location.href = `/`;
      }
      );
  
      // Optionally, you can also navigate to a different page after successful login
      // window.location.href = "/dashboard"; // Example navigation
  
    } catch (error) {
      // Handle any errors that occur during Google login
      console.error("Google login error:", error);
      // Optionally, you can show an alert for login failure as well
      // alert("Google login failed. Please try again."); 
    }
      
  };


  useEffect(() => {
    if (session?.data?.user) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are logged in successfully, Redirecting to home page",
        timer: 2000,
        showConfirmButton: true,
      }).then(() => {
        axios.get(`https://bookwarp-server.vercel.app/users/${session?.data?.user?.email}`)
        .then((res)=>
        {
          if(res.data)
          {
            localStorage.setItem("user", JSON.stringify(res.data));
          }
        })
      });
    }
  },[session]);


  return (
    <div className="hero   flex items-center justify-center">
      <App />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div
          className="card shrink-0 w-full max-w-sm shadow-2xl"
          style={myStyle}
        >
          <form className="card-body w-96" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="flex items-center justify-center">
                <span className="label-text text-white text-4xl font-bold underline mb-8 flex items-center gap-2">
                  <IoMdLogIn /> Login
                </span>
              </label>
              <label htmlFor="email" className="label">
                <span className="label-text text-white text-xl font-bold">
                  Email
                </span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="input input-bordered bg-white text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text text-white text-xl font-bold">
                  Password
                </span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                className="input input-bordered bg-white text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <Link
                  href="#"
                  className="label-text-alt link text-lg link-hover text-green-200 mt-2"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-2 ">
              <button
                type="submit"
                className="btn border-none text-white text-xl  bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] hover:bg-black"
              >
                Login
              </button>

              <p className="text-white mt-2">
                Don&apos;t have any account?{" "}
                <Link
                  href={"/registration"}
                  className="text-blue-600 hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <label className="label-text-alt link text-lg link-hover text-white mt-2 flex items-center gap-2">
                Or login with <FaHandPointDown />
              </label>
            </div>
          </form>
          <div className="flex items-center justify-center gap-6 -mt-8 mb-8">
            <button
              onClick={handleGoogleLogin}
              className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-green-200 mt-2 "
            >
              <FcGoogle />
            </button>
            <button
              onClick={handleFacebookLogin}
              className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-blue-400 mt-2 "
            >
              <FaFacebook />
            </button>
            <button
              onClick={handleGithubLogin}
              className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-white mt-2 "
            >
              <LuGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
