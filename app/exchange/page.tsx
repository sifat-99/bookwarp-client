"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
type Inputs = {
  example: string;
  exampleRequired: string;
};
const Page = () => {
  const session = useSession();
  console.log(session.data?.user?.email);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, reset } = useForm<Inputs>();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>()

  const onSubmit = async (data:any) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;

    console.log(data, email, name);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `You will Get $${data.price / 2} for this book `,
      showConfirmButton: true,
      showCancelButton: true,
    });
  };
  return (
    <>
      <form
        className="py-10  lg:w-3/4 md:mx-4 lg:mx-auto mx-auto border rounded-lg md:px-8 lg:px-20 my-20 dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl text-center py-4 font-semibold">
          Your Book Information:
        </h2>
        <div className="flex gap-6 ">
          {/* category */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text dark:text-white">Book Name</span>
            </label>
            <input
              type="text"
              placeholder="book name"
              {...register("title", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* price */}

          {/* catagories */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text dark:text-white">Category*</span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full"
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
              <span className="label-text dark:text-white">Writer*</span>
            </label>
            <input
              type="text"
              placeholder="writer"
              {...register("writer", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* price */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              value={session.data?.user?.email}
              {...register("email", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-6">
          {/* category */}

          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text dark:text-white">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("price", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* price */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text dark:text-white">Description</span>
            </label>
            <input
              type="text"
              placeholder="description"
              {...register("description", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control w-full my-3">
          {/* { required: true } */}
          <input
            {...register("avatar")}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        <button className="btn">Exchange</button>
      </form>
    </>
  );
};

export default Page;
