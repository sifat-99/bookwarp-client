"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import Red from  "@/public/red.json"

const image_hosting_api: string = `https://api.imgbb.com/1/upload?key=${"e054ffbffeb28fc199b69e426ab8669e"}`;

type Inputs = {
  example: string;
  exampleRequired: string;
};
const Page = () => {
  const session = useSession();
  const userEmail = session?.data?.user?.email;
  const [users, setUsers] = useState({});

  console.log(session.data?.user?.email)

  useEffect(() => {
    axios.get(`https://bookwarp-server.vercel.app/users/${userEmail}`).then((res) => {
        setUsers(res.data);
    });
  }, [userEmail]);

console.log(users)


  if(users)
  {
    if ((users as { role: string }).role !== "admin") {
      return (
        <div className="flex justify-center flex-col items-center h-auto">
           <Lottie className="w-8/12 lg:w-1/3 mx-auto" animationData={Red}/>
          <h1 className="text-4xl text-center font-bold text-black dark:text-white">
            You are not an admin, you can&apos;t access this page
          </h1>
          <button className="btn bg-black text-white dark:bg-white dark:text-black mt-4">
            <a href="/">Go Back</a>
          </button>
        </div>
      );
  
    }
  }



  type Inputs = {
    title: string;
    category: string;
    writer: string;
    rating: string;
    price: number;
    description: string;
    avatar?: FileList;
    cover: string;
    ratings: string
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit = async (data: any) => {
    const imageFile = { image: data.cover[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const bookInfo = {
        ...data,
        cover: res.data.data.display_url,
        id: crypto.randomUUID(),
      };

      // bookInfo
      const bookRes = await axios.post(
        "https://bookwarp-server.vercel.app/allBooks",
        bookInfo
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: `Successfully New Book Added!!`,
        showConfirmButton: true,
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {

        }
      }
      );
      reset();
    }
  };
  return (
    <>
      <form
        className="py-10  lg:w-3/4 md:mx-4 lg:mx-auto mx-auto border rounded-lg md:px-8 lg:px-20 my-20 text-black dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl text-center py-4 font-semibold">
          Add New Book
        </h2>
        <div className="flex gap-6 ">
          {/* category */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Book Name
              </span>
            </label>
            <input
              type="text"
              placeholder="book name"
              {...register("title", { required: true })}
              required
              className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            />
          </div>

          {/* catagories */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Category*
              </span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            >
              <option defaultValue="">Select Category</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Fantasy">Novel</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Literary Fiction">Literary Fiction</option>
              <option value="Poetry">Poetry</option>
              <option value="Historical Fiction">Historical Fiction</option>
              <option value="Drama">Drama</option>
            </select>
          </div>
        </div>
        <div className="flex gap-6">
          {/* category */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Writer*
              </span>
            </label>
            <input
              type="text"
              placeholder="writer"
              {...register("writer", { required: true })}
              required
              className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            />
          </div>

          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Rating
              </span>
            </label>
            <input
              type="number"
              placeholder="rating"
              {...register("ratings", { required: true })}
              required
              className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            />
          </div>
        </div>
        <div className="flex gap-6">
          {/* category */}

          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Price*
              </span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("price", { required: true })}
              required
              className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            />
          </div>

          {/* price */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Description
              </span>
            </label>
            <input
              type="text"
              placeholder="description"
              {...register("description", { required: true })}
              required
              className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            />
          </div>
        </div>

        <div className="form-control w-full my-3 ">
          {/* { required: true } */}
          <input
            {...register("cover")}
            type="file"
            className="file-input w-full max-w-xs bg-white  dark:bg-black text-black dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="btn bg-black text-white dark:bg-white dark:text-black"
        >
          Add Book
        </button>
      </form>
    </>
  );
};

export default Page;
