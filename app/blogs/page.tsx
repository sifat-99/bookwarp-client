"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState<any>([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allBlogs')
        .then(res => res.json())
        .then(data => setAllBlogs(data))
    },[])
    return (
        <section>
            <div className='container mx-auto py-5'>
                <h1 className='text-center text-3xl font-bold my-8'>Our Latest blog</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3'>
                    {
                        allBlogs.map((blog:any) => <>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={blog.cover} alt='book'/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{blog.title}</h2>
                                    <p>{blog.description}</p>
                                    <div>
                                        <button className="btn text-white bg-[#3BB0C7] hover:bg-[#CCB87B]">Read more</button>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Blogs;    