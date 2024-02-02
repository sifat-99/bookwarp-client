"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Lottie from "lottie-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from  "@/public/Sad.json"

export default async function bookmark() {
    const [bookMarks, setBookmarks]=useState([]);
    const userInfo= useSession();
    const email=userInfo?.data?.user?.email;
    const allbookMarks =`https://bookwarp-server.vercel.app/bookmark?email=${email}`  ;
     useEffect(()=>{
        axios.get(allbookMarks)
        .then(res=>{
            setBookmarks(res.data);
        })
     },[allbookMarks])

     const hendelDelete = (id: any) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://bookwarp-server.vercel.app/bookmark/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Bookmark has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookMarks.filter((bookmark:any) => bookmark._id !== id);
                            setBookmarks(remaining);

                        }
                    })

            }
        });
    }
   
    return (
        <section className="mt-5">
            {
                (bookMarks?.length > 0)
                ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                           bookMarks?.map((bookmark: any) => <>
                           <div className="card h-[500px] border card-compact bg-white dark:bg-black text-black dark:text-white shadow-xl p-2">
                               <figure><Image width={250} height={300} className='rounded-lg bg-slate-400' src={bookmark.cover} alt="book" /></figure>
                               <div className="card-body">
                                   <h2 className="text-xl text-center font-semibold">{bookmark.title}</h2>
                                   <p className='text-center'>{bookmark.writer}</p>
                                   <p className='text-center'><span className='font-semibold'>Price:</span> {bookmark.price}$</p>
                                   <div className="card-actions justify-center">
                                       <button className="btn btn-outline text-black dark:text-white">Details</button>
                                       <button className="btn btn-outline  text-black dark:text-white">Exchange</button>
                                       <button className="btn btn-outline  text-black dark:text-white">Buy Now</button>
                                       <button onClick={()=>hendelDelete(bookmark._id)} className="btn btn-outline  text-black dark:text-white">Remove</button>
                                   </div>
                               </div>
                           </div>
                       </>)
                    }
                </div>
                :
                <div>
                    <Lottie className="w-8/12 lg:w-1/3 mx-auto" animationData={Loading} />
                    <h2 className="text-center text-4xl font-bold">Your have no Bookmark</h2>
                </div>
                    
                 
                

             
            }
        </section>
    );
};