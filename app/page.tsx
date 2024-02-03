// @ts-nocheck
import Books from "./Books/Books";
import FacebookMsg from "./Components/FacebookMsg";
import Banner from "./banner/Banner";
import ContactUs from "./contactUs/ContactUs";
export default function Home() {
  return (
    <main>
      <Banner />
      <h1 className="font-bold text-3xl text-center mt-14 mb-2 text-black dark:text-white">Books</h1>
      <Books/>
      {/* <h1 className="font-bold text-3xl text-center mt-14 mb-2">Featured</h1> */}
      <ContactUs />
      <FacebookMsg />
    </main>
  );
}
