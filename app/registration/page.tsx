"use client";

import React, { useState } from "react";
import App from "../tsParticles";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/config/firebase";
import { signIn } from "next-auth/react";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [valid, setValid] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file.name);
    }
  };

  const handleRegistrationPassword = (pass: string) => {
    setPassword(pass);
    if (pass.length < 6) {
      setValid("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(pass)) {
      setValid("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(pass)) {
      setValid("Password must contain at least one lowercase letter");
      return;
    } else if (!/[0-9]/.test(pass)) {
      setValid("Password must contain at least one number");
      return;
    } else if (!/[!@#$%^&*]/.test(pass)) {
      setValid("Password must contain at least one special character");
      return;
    } else {
      setValid("Password is valid");
    }
    setValidPassword(pass);
  };
  const myStyle = {
    background: "rgba(88, 130, 193, 0.28)",
    fontSize: "16px",
    border: "3px solid rgba(88, 130, 193, 0.49)",
    borderRadius: "12px",
    blur: "12.5px",
  };

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, validPassword)
    .then((user)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registration Successful, Login to continue',
        showConfirmButton: true,
        timer: 1500
      }).then(()=>{
        axios.post("https://bookwarp-server.vercel.app/users",{
          email: email,
          name: name,
          image: image,
          role: "user",
          address: {
            division: "",
            district: "",
          },
          bloodGroup: "",
          phone: "123",
        }).then((res)=>{
          console.log(res.data);
        }
        )
        window.location.href = "/login";
      }
      )
      updateProfile(user.user, {
        displayName: name,
        photoURL: image,
        })
    })
  };

  const handleGoogleLogin = () => {
    // console.log("google login");
    signIn("google", { callbackUrl: "/" })
  };

  const handleGithubLogin = () => {
    // console.log("github login");
    signIn("github", { callbackUrl: "/" })
  };

  return (
    <div className="hero">
      <App />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div
          className="card shrink-0 w-full max-w-sm shadow-2xl"
          style={myStyle}
        >
          <form className="card-body w-96">
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
                id="email1"
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
            <div>
              <label className="label">
                <span className="label-text text-white text-xl font-bold">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  className="input w-full input-bordered bg-white text-black"
                  value={password}
                  onChange={(e: any) =>
                    handleRegistrationPassword(e.target.value)
                  }
                  required
                />
              </div>
              {
                valid === "Password is valid" ? <p className="text-white text-xs italic">{valid}</p> : <p className="text-red-500 text-xs italic">{valid}</p>
              }
            </div>
            <div className="form-control mt-6">
              <button
                onClick={(e:any) => handleRegistration(e)}
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

            </div>
          </form>
          <hr className="-mt-2" />
              <div className="flex items-center justify-center gap-4">
                <label className="label-text-alt link text-lg link-hover text-white mt-2 flex items-center gap-2">
                  Or login with
                </label>

                <button
                  onClick={handleGoogleLogin}
                  className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-green-200 mt-2 "
                >
                  <FcGoogle />
                </button>
                <button className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-blue-400 mt-2 ">
                  <FaFacebook />
                </button>
                <button
                  onClick={handleGithubLogin}
                  className="label-text-alt link text-3xl bg-black p-2 rounded-full link-hover text-white mt-2 "
                >
                  <LuGithub />
                </button>
              </div>
              <hr className="mt-2 mb-2" />
        </div>
        
      </div>
    </div>
  );
};

export default Login;
