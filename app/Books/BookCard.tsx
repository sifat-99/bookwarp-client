import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = (props:any) => {
  const { _id ,cover, title, writer, price} = props.books;
    return (
        <div>
            <div className="card h-[500px] card-compact bg-slate-200 dark:bg-base-100 shadow-xl p-2">
              <figure><Image width={250} height={300} src={cover} alt="book" /></figure>
              <div className="card-body">
                <h2 className="text-xl text-black dark:text-white text-center font-semibold">{title}</h2>
                <p className='text-center text-black dark:text-white'>{writer}</p>
                <p className='text-center text-black dark:text-white'><span className='font-semibold'>Price:</span> {price}$</p>
                <div className="card-actions justify-center">
                  <Link href={`allBooks/${_id}`}><button className="btn btn-outline text-black dark:text-white">Details</button></Link>
                  <button className="btn btn-outline text-black dark:text-white">Exchange</button>
                  <button className="btn btn-outline text-black dark:text-white">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default BookCard;