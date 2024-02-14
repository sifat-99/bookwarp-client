"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../Components/Books/BookCard";
const Page = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    fetch("https://bookwarp-server.vercel.app/allBooks")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
        setFilteredBooks(data);
      });
  }, []);

  useEffect(() => {
    if (category === "all") {
      setFilteredBooks(allBooks);
    } else {
      const books = allBooks?.filter((books: any) =>
        books.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredBooks(books);
    }
  }
  , [category,allBooks]);

  // Search Function by dev-shorif
  const handleSearch = (e: any) => {
    e.preventDefault();
    axios
      .get(
        `https://bookwarp-server.vercel.app/search?text=${e.target.text.value}`
      )
      .then(function (response) {
        setFilteredBooks(response.data);
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  return (
    <div className="pt-12 min-h-screen">
      <div className="font-bold text-3xl text-center  mb-2 text-black dark:text-white">
        All Books
      </div>
      <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
        {/* <!-- Form --> */}
        <form onSubmit={handleSearch}>
          <div className="relative z-10 flex space-x-3 dark:bg-gray-600 bg-white border rounded shadow-lg">
            <select
              onChange={(e: any) => {
                setCategory(e.target.value);
              }}
              name="Filter"
              id="Filter"
              className="m-1 bg-red-500 w-1/5 border-none rounded-lg pl-2 hover:bg-blue-700 text-white"
            >
              <option value="all">All</option>
              <option value="Mystery">Mystery</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
              <option value="Science fiction">Science fiction</option>
              <option value="Literary fiction">Literary fiction</option>
              <option value="Poetry">Poetry</option>
              <option value="Historical fiction">Historical fiction</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
              <option value="Contemporary fiction">Contemporary fiction</option>
              <option value="Adventure">Adventure</option>
              <option value="Horror">Horror</option>
            </select>
            <div className="flex-[1_0_0%]">
              <input
                type="text"
                name="text"
                placeholder="Search..."
                className="text-gray-500 h-full px-4 dark:rounded-br-3xl dark:rounded-tl-3xl focus:border-0 focus:outline-none  w-full"
              ></input>
            </div>
            <button
              type="submit"
              className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-bold rounded border border-transparent bg-red-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none my-auto"
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
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {filteredBooks?.map((books: any) => (
          <BookCard key={books?.id} books={books} />
        ))}
      </div>
    </div>
  );
};

export default Page;

// Mystery
// Fantasy
// Romance
// Science fiction
// Literary fiction
// Poetry
// Historical fiction
// Drama
// Thriller
// Contemporary fiction
// Adventure
// Horror
