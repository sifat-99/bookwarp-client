/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
async function getData() {
    const userInfo= useSession();
    const email=userInfo?.data?.user?.email;
    const res = await fetch(`https://bookwarp-server.vercel.app/bookmark?email=${email}`)

    if (!res.ok) {

        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function bookmark() {
    const bookMarks = await getData();
   
    return (
        <section className="mt-5">
            {
                (bookMarks?.length > 0)
                ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                           bookMarks?.map((bookmark: any) => <>
                           <div className="card h-[500px] card-compact bg-base-100 shadow-xl p-2">
                               <figure><Image width={250} height={300} className='rounded-lg bg-slate-400' src={bookmark.cover} alt="book" /></figure>
                               <div className="card-body">
                                   <h2 className="text-xl text-center font-semibold">{bookmark.title}</h2>
                                   <p className='text-center'>{bookmark.writer}</p>
                                   <p className='text-center'><span className='font-semibold'>Price:</span> {bookmark.price}$</p>
                                   <div className="card-actions justify-center">
                                       <button className="btn btn-outline">Details</button>
                                       <button className="btn btn-outline">Exchange</button>
                                       <button className="btn btn-outline">Buy Now</button>
                                   </div>
                               </div>
                           </div>
                       </>)
                    }
                </div>
                :
                <h2 className="text-center text-4xl font-bold">Your have no Bookmark</h2>
                    
                 
                

             
            }
        </section>
    );
};