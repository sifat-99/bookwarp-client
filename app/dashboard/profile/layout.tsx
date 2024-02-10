import React from "react";
import Navbar from "@/app/Components/Navbar/page"
import Footer from "@/app/Components/footer/Footer"

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>
    <Navbar />
   
    {children}
    </div>;
};

export default layout;
