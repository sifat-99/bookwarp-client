import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-gradient-to-r from-[#325168] to bg-[#297b83] pb-6 rounded-t-lg">
        <div className="container mx-auto">
          <div className="flex justify-between py-4 px-12">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-white text-2xl font-bold">BookWrap</h2>
            </div>
            <div className="flex gap-2 md:gap-3 items-center">
              <p className="text-white text-lg">Ready to get started?</p>
              <button className="bg-white text-md font-bold md:py-2 px-4 md:px-12 rounded-lg">Exchange</button>
            </div>
          </div>
          <hr/>
          <div className="text-white pt-7 px-12 justify-center items-center grid grid-cols-2 md:grid-cols-4 gap-6 ">
            <div>
              <h3 className="text-xl font-semibold pb-7">
                Subscribe to our newsletter
              </h3>
              <div className="flex gap-2">
                <FaFacebook className="text-xl"/>
                <FaTwitter className="text-xl"/>
                <FaLinkedin className="text-xl"/>
                <FaInstagram className="text-xl"/>
              </div>
            </div>
            <div>
              <h3 className="text-xl pb-1">Services</h3>
              <p>Book Exchange</p>
              <p>Book Sell</p>
              <p>Book Buy</p>
              <p>Book Donate</p>
            </div>
            <div>
              <h3 className="text-xl pb-1">Blogs</h3>
              <p>Email Marketing</p>
              <p>Campaigns</p>
              <p>Branding</p>
              <p>Offline</p>
            </div>
            <div>
              <h3 className="text-xl pb-1">Books</h3>
              <p>Email Marketing</p>
              <p>Campaigns</p>
              <p>Branding</p>
              <p>Offline</p>
            </div>
          </div>
          <footer className="footer footer-center px-4 mt-10 text-white">
            <aside>
              <p>Copyright © 2023 - All right reserved by BookWrap Ltd</p>
            </aside>
          </footer>
        </div>
      </div>
    </footer>
  );
};

export default footer;
