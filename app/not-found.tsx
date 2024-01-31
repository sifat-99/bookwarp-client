"use client"
import Lottie from "lottie-react";
import ErrorAnimation from "./404.json"

export default function NotFound() {
  return (
    <div>
      <Lottie className="w-8/12 lg:w-1/3 mx-auto" animationData={ErrorAnimation}/>
    </div>
  )
}
