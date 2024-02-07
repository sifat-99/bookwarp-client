import type { Metadata } from "next";
import { Poppins, Fira_Code,Rubik_Glitch, Inter,Cute_Font } from 'next/font/google'
import Navbar from "./Navbar/page";
import Footer from "./footer/Footer";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import SessionProvider from "./SessionProvider";
import { Providers } from "./provider";

// const inter = Inter({ subsets: ['latin'] })
export const poppins = Fira_Code({
  subsets: ['latin'],
  weight: [ "300", "400", "500", "600", "700"],
})
export const Rubik = Rubik_Glitch({
  subsets: ['cyrillic'],
  weight: "400"
})
// export const cute = Cute_Font({
  //   subsets: ['latin'],
  //   weight: ["400"]
  // })

export const metadata: Metadata = {
  title: "BookWarp",
  description: "A book exchange store for everyone",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://i.ibb.co/zZ66BxY/In-Shot-20240118-165615156.png"
        />
        <title>BookWarp</title>
      </head>
      <body className={`${poppins.className} mx-auto bg-white dark:bg-black`}>
        <Providers>
          <SessionProvider>
            <main>{children}</main>
            <ToastContainer />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
