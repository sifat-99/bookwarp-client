// @ts-nocheck
import Books from "./Books/Books";
import Banner from "./banner/Banner";
import ContactUs from "./contactUs/ContactUs";
export default function Home() {
  return (
    <main>
      <Banner />
      <h1 className="font-bold text-3xl text-center mt-14 mb-2">Books</h1>
      <Books/>
      {/* <h1 className="font-bold text-3xl text-center mt-14 mb-2">Featured</h1> */}
      <ContactUs />
    </main>
  );
}
