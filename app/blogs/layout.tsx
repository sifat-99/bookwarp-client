import React from "react";
import Navbar from "@/app/Components/Navbar/page"
import Footer from "@/app/Components/footer/Footer"
import RootLayout from "../layout";

const layout = ({ children }: { children: React.ReactNode }) => {
 return <RootLayout>{children}</RootLayout>;
};

export default layout;
