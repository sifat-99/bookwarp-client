// import {
//   FacebookLogo,
//   GithubLogo,
//   InstagramLogo,
//   TwitterLogo,
//   YoutubeLogo,
// } from "@phosphor-icons/react";
const footer = () => {
  return (
    <footer className="">
      <div className="bg-[#1E2833] pb-6">
        <div className="container mx-auto">
          <div className="flex justify-between pt-10 px-12">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-white text-xl ">BookWrap</h2>
            </div>
            <div className="flex gap-6 md:gap-10 items-center">
              <p className="text-white text-xl">Ready to get started?</p>
              <button className="bg-white text-3xl font-bold py-2 md:py-4 px-4 md:px-12 rounded-lg">
                Exchange
              </button>
            </div>
          </div>
          <hr className="my-10" />
          <div className="text-white px-12 justify-center items-center grid grid-cols-2 md:grid-cols-4 gap-6 ">
            <div>
              <h3 className="text-xl font-semibold pb-7">
                Subscribe to our newsletter
              </h3>
              <div className="flex gap-2">
                {/* <FacebookLogo size={26} />
                <InstagramLogo size={26} />
                <TwitterLogo size={26} />
                <GithubLogo size={26} />
                <YoutubeLogo size={26} /> */}
                <p>Icon will be here</p>
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
          <footer className="footer footer-center p-4 mt-16 text-white">
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
