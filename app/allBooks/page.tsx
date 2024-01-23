"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import BookCard from "../Books/BookCard";

const Page = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('https://bookwarp-server.vercel.app/allBooks')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])
    return (
        <div>
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">All Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 px-3 lg:grid-cols-4 gap-5 mt-10">
                {
                   allBooks?.map((books: any) => <BookCard key={books?.id} books={books}/>)
                }
            </div>
        </div>
    );
};

export default Page;