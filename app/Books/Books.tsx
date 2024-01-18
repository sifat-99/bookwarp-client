"use client"
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('allBooks.json')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-3 lg:grid-cols-4 gap-5 mt-10">
                {
                    allBooks?.slice(0, 4)?.map(books => <BookCard key={books?.id} books={books}/>)
                }

            </div>
            <div className="flex justify-center my-10">
                <button className="btn bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] text-white">Show More</button>
            </div>
        </div>
    );
};

export default Books;