import Image from 'next/image';
import React from 'react';

const BookCard = (props:any) => {
  const {cover, title, writer, price} = props.books;
    return (
        <div>
            <div className="card h-[500px] card-compact bg-base-100 shadow-xl p-2">
              <figure><Image width={250} height={300} className='rounded-lg bg-slate-400' src={cover} alt="book" /></figure>
              <div className="card-body">
                <h2 className="text-xl text-center font-semibold">{title}</h2>
                <p className='text-center'>{writer}</p>
                <p className='text-center'><span className='font-semibold'>Price:</span> {price}$</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline">Details</button>
                  <button className="btn btn-outline">Exchange</button>
                  <button className="btn btn-outline">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default BookCard;