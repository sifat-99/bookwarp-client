import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 lg:h-[750px] md:px-6 lg:px-20">
      <div className="flex flex-col gap-2 md:gap-6 w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold md:font-bold pt-7 md:pt-2">Welcome to BookWarp</h2>
        <p>Discover the Joy of Book Exchange. Exchange books, explore new worlds. Connect through stories at our Book Exchange hub!</p>
        <div className="flex gap-3 pt-2">
          <button className="btn bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] text-white  font-medium text-md">Exchange</button>
          <button className="btn bg-gradient-to-r from-red-500 to bg-red-400 w-24 text-white font-medium text-md">Buy</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center ">
        <Image className="object-cover hidden md:block" src="https://i.ibb.co/zJqP1Ky/banner.png" alt="Landscape picture" height={700} width={500} />
      </div>
    </div>
  );
};

export default Banner;
