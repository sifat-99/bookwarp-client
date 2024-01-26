"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../Books/BookCard";
const Page = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("https://bookwarp-server.vercel.app/allBooks")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);


// Search Function by dev-shorif
  const handleSearch = (e:any) => {
    e.preventDefault();
    axios
      .get(
        `https://bookwarp-server.vercel.app/search?text=${e.target.text.value}`
      )
      .then(function (response) {
        setAllBooks(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-14 mb-2">All Books</h1>
      <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
        {/* <!-- Form --> */}
        <form onSubmit={handleSearch}>
          <div className="relative z-10 flex space-x-3 bg-white border rounded shadow-lg shadow-gray-100 ">
            <div className="flex-[1_0_0%]">
              <input
                type="text"
                name="text"
                placeholder="Search..."
                className="text-gray-500 h-full px-4 focus:border-0 focus:outline-none  w-full"
              ></input>
            </div>
            <button
              type="submit"
              className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-bold rounded border border-transparent bg-red-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </form>
        {/* <!-- End Form --> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 lg:grid-cols-4 gap-5 mt-10">
        {allBooks?.map((books: any) => (
          <BookCard key={books?.id} books={books} />
        ))}
      </div>
    </div>
  );
};

export default Page;
