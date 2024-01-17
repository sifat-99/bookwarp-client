"use client";

import React, { useState } from "react";
import App from "../tsParticles";
import Link from "next/link";

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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login", { email, password });
    // You can add your login logic here
  };

  return (
    <div className="hero min-h-screen">
      <App />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div
          className="card shrink-0 w-full max-w-sm shadow-2xl"
          style={myStyle}
        >
          <form className="card-body w-96" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="flex items-center justify-center">
                <span className="label-text text-white text-4xl font-bold underline mb-8">
                  Registration
                </span>
              </label>
              <label htmlFor="email" className="label">
                <span className="label-text text-black text-2xl font-bold">
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
                <span className="label-text text-black text-2xl font-bold">
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
                <span className="label-text text-black text-2xl font-bold">
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
                <span className="label-text text-black text-2xl font-bold">
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
                className="btn border-none text-white text-xl  bg-[#41e1ef] hover:bg-black"
              >
                Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
