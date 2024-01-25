"use client";

import React, { useState } from "react";
import App from "../tsParticles";
import Link from "next/link";
import { FcGoogle  } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { signIn } from "next-auth/react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file.name);
    }
  };

  console.log(image)

  const myStyle = {
    background: "rgba(88, 130, 193, 0.28)",
    fontSize: "16px",
    border: "3px solid rgba(88, 130, 193, 0.49)",
    borderRadius: "12px",
    blur: "12.5px",
  };

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login", { email, password });
    createUserWithEmailAndPassword(auth, email, password);
  };


  const handleGoogleLogin = () => {
    console.log("google login");
    signIn("google", { callbackUrl: "/" });

};


const handleGithubLogin = () => {
  console.log("github login");
  signIn("github", { callbackUrl: "/" });
}



  return (
    <div className="hero">
      <App />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div
          className="card shrink-0 w-full max-w-sm shadow-2xl"
          style={myStyle}
        >
          <form className="card-body w-96" onSubmit={handleRegistration}>
            <div className="form-control">
              <label className="flex items-center justify-center">
                <span className="label-text text-white text-4xl font-bold underline mb-8">
                  Registration
                </span>
              </label>
              <label htmlFor="email" className="label">
                <span className="label-text text-white text-xl font-bold">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                id="email"
                placeholder="Your name"
                className="input input-bordered bg-white text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
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
              <label htmlFor="image" className="label">
                <span className="label-text text-white text-xl font-bold">
                  Upload Photo
                </span>
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="input bg-transparent text-black"
                onChange={handleImageChange}
                required
              />
              {image && (
                <div>
                  <p>Selected Image: {image}</p>
                </div>
              )}
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
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn border-none text-white text-xl  bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] hover:bg-black"
              >
                Registration
              </button>
              <p className="text-white mt-2">
                Already have an account?{" "}
                <Link href={"/login"} className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
                <hr className="mt-4"/>
              <div className="flex items-center justify-center gap-4">
                <label className="label-text-alt link text-lg link-hover text-white mt-2 flex items-center gap-2">
                  Or login with
                </label>

                <button onClick={handleGoogleLogin} className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-green-200 mt-2 ">
                  <FcGoogle />
                </button>
                <button className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-blue-400 mt-2 ">
                  <FaFacebook />
                </button>
                <button onClick={handleGithubLogin} className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-white mt-2 ">
                  <LuGithub />
                </button>
                </div>
                <hr className="mt-2"/>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
