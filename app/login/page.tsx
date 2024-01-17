"use client"


import React, { useState } from "react";
import App from "../tsParticles";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const myStyle = {
    background: "rgba(88, 130, 193, 0.28)",
    fontSize: "16px",
    border: "3px solid rgba(88, 130, 193, 0.49)",
    borderRadius: "12px",
    blur: "12.5px",
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login", { email, password });
    // You can add your login logic here
  };

  return (
    <div className="hero min-h-screen">
        <App/>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl" style={myStyle}>
          <form className="card-body w-96" onSubmit={handleLogin}>
            <div className="form-control">
            <label className="flex items-center justify-center">
                <span className="label-text text-white text-4xl font-bold underline mb-8">
                  Login
                </span>
              </label>
              <label htmlFor="email" className="label">
                <span className="label-text text-white text-2xl font-bold">Email</span>
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
                <span className="label-text text-white text-2xl font-bold">Password</span>
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
                <Link href="#" className="label-text-alt link link-hover text-green-200 mt-2">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-2 ">
              <button
                type="submit"
                className="btn text-white"
                style={{ backgroundColor: "#34c1ce" }}
              >
                Login
              </button>

              <p className="text-red-600 mt-2">Don&apos;t have any account? <Link href={"/registration"} className="text-blue-600 hover:underline">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
