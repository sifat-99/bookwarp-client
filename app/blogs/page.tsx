/* eslint-disable @next/next/no-img-element */
import React from 'react';

const myBlog = () => {
    const blogs = [
        {
            "id": 1,
            "title": "5 benefits of reading everyday",
            "cover": "https://i.ibb.co/VqHWxgp/blog1.jpg",
            "description": "There are so many benefits to reading books.But let's face it: It can be challenging to motivate ourselves to read a 382-page book when we can watch the movie, listen to the audiobook, or watch a YouTube video summary instead."

        },
        {
            "id": 2,
            "title": "Importance of Book exchange",
            "cover": "https://i.ibb.co/dB19dkG/blog1.jpg",
            "description": "Book swaps can be a great way to share your love of reading and discover exciting new books, and also give children the opportunity to choose a book for themselves that excite them and start to build a lifelong love of reading. Book swaps are also a great way to support and improve literacy levels in the community."

        },
        {
            "id": 3,
            "title": "What is a good review?",
            "cover": "https://i.ibb.co/27n4Tpy/blog3.jpg",
            "description": "A good review is a positive and favorable evaluation shared by a satisfied customer or user of a product, service, or business. In a good review, the individual highlights the aspects they enjoyed, such as exceptional service, high-quality products, or a memorable experience."

        }
    ]
    return (
        <section>
            <div className='container mx-auto py-5'>
                <h1 className='text-center text-3xl font-bold my-8'>Our Latest blog</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3'>
                    {

                        blogs.map(blog => <>
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

export default myBlog;    