import Image from "next/image";
import banner from "./banner2.png";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-6 lg:px-20">
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <h2 className="text-2xl lg:text-3xl font-medium">
          Swap, Share, and Expand Horizons
        </h2>
        <h2 className="text-5xl lg:text-7xl font-semibold py-2 lg:py-6">
          Discover the Joy of <br className="hidden lg:block" />
          Book Exchange!
        </h2>
        <p>
          Welcome to BookWarp, where book lovers unite to share the magic of
          storytelling! <br />
          Join our vibrant community and embark on a literary journey like never
          before.
        </p>
        <div className="flex gap-6 pt-10">
          <button className="btn bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] text-white  font-medium text-md">
            Exchange
          </button>
          <button className="btn bg-red-500 text-white  font-medium text-md">
            Buy
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center ">
        <Image
          className="object-cover"
          src={banner}
          alt="Landscape picture"
          height={700}
          weight={500}
        />
      </div>
    </div>
  );
};

export default Banner;
