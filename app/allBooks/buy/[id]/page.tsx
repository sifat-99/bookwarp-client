/* eslint-disable @next/next/no-img-element */
"use client";
import CurrentUser from "@/app/CurrentUser";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Detail = (props: any) => {
  const session = useSession();
  const [current, setCurrent] = useState<any>();
  const [book, setBook] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<any>();
  const idURL = `https://bookwarp-server.vercel.app/allBooks/${props.params.id}`;
  useEffect(() => {
    fetch(idURL)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [idURL]);
  const { _id, cover, title, writer, price, description, category, ratings } =
    book;

  const currentUser = CurrentUser();
  useEffect(() => {
    if (currentUser) {
      setCurrent(currentUser);
    }
  }, [currentUser]);

  console.log(current);

  type Inputs = {
    customerName: string;
    customerEmail: string;
    quantity: number;
    contact: number;
    address: string;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit =  (data: any) => {   


        fetch("https://bookwarp-server.vercel.app/order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...data,
              bookId: _id,
              bookTitle: title,
              bookCover: cover,
              bookPrice: price * data.quantity,
              bookWriter: writer,
              bookCategory: category,
              bookRatings: ratings,
            }),
  }).then((res) => res.json())
    .then((data) => {
        console.log(data)
        window.location.replace(data.url)
    });

    reset();
  };

  return (
    <>
      <h1 className="font-bold text-3xl text-center mt-14 mb-2 text-black dark:text-white">
        Confirm Order
      </h1>
      <div className="flex border justify-between items-center flex-col lg:flex-row">
        <div className="w-full p-5 text-black dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <figure>
              <img
                className="rounded-lg lg:h-[400px]"
                src={cover}
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title font-bold text-center mx-auto mt-2">
              {title}
            </h2>
            <p className="font-normal">
              <span className="font-semibold">Writer: </span>
              {writer}
            </p>
            <p className="font-normal">
              <span className="font-semibold">Category: </span>
              {category}
            </p>
            <p className="font-normal">
              <span className="font-semibold">Ratings: </span>
              {ratings}
            </p>
            <p className="font-bold">
              <span className="font-semibold">Price: </span>
              {price}$
            </p>
          </div>
        </div>
        <div className="w-full">
          <form
            className=" text-black dark:text-white px-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-3xl text-center py-4 font-semibold underline">
              Customer Information
            </h2>
            <div className="flex gap-6 ">
              {/* category */}
              <div className="form-control w-full my-3">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Customer Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Customer name"
                  {...register("customerName", { required: true })}
                  required
                  defaultValue={current?.name}
                  className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
                />
              </div>
              <div className="form-control w-full my-3">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Contact No*
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="contact no"
                  value={current?.phone}
                  {...register("contact", { required: true })}
                  required
                  className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-full my-3">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Email*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  value={session.data?.user?.email || ""}
                  {...register("customerEmail", { required: true })}
                  required
                  className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
                />
              </div>

              <div className="form-control w-full my-3">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="quantity"
                  defaultValue={1}
                  {...register("quantity", { required: true })}
                  className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
                />
              </div>
            </div>
            <div className="flex gap-6">
              {/* price */}
              <div className="form-control w-full my-3">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Address
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: true })}
                  required
                  defaultValue={`${current?.address?.division}, ${current?.address?.district}`}
                  className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn bg-black text-white dark:bg-white dark:text-black"
            >
                Confirm Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Detail;
