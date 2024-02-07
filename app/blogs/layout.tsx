import React from "react";
import Navbar from "@/app/Navbar/page"
import Footer from "@/app/footer/Footer"

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>
    <Navbar />
   
    {children}

    <Footer/>
    </div>;
};

export default layout;
