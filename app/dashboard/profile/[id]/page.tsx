/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const update = (props: any) => {
  const session = useSession();
  const userEmail = session?.data?.user?.email;
  const [users, setUsers] = useState<any>();

  console.log(session.data?.user?.email)

  useEffect(() => {
    axios.get(`https://bookwarp-server.vercel.app/users/${userEmail}`).then((res) => {
        setUsers(res.data);
    });
  }, [userEmail]);

console.log(users)

  

  const [division, setDivision] = useState<string>("");

  const image_hosting_api: string = `https://api.imgbb.com/1/upload?key=${"1b258f535ebc57322b29944121f24ff5"}`;

  type Inputs = {
    name: string;
    email: string;
    avatar?: FileList;
    bloodGroup: string;
    division: string;
    district: string;
    phone: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: any) => {

    const updateData = {
      name: data.name,
      bloodGroup: data.bloodGroup,
      address: {
        division: data.division,
        district: data.district,
      },
      phone: data.phone,
    };
    console.log(updateData)



    const imageFile = { image: data?.avatar[0] };
    console.log(imageFile)
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      console.log(res.data.data.display_url)

      const bookInfo = {
        name: data.name,
        email: data.email,
        bloodGroup: data.bloodGroup,
        address: {
          division: data.division,
          district: data.district,
        },
        phone: data.phone as string,
        image: res.data.data.display_url,
        id: crypto.randomUUID(),
      };
      console.log(bookInfo)

      axios.put(`https://bookwarp-server.vercel.app/users/update/${userEmail}`, bookInfo).then((res:any) => {
        console.log(res.data);
        if (res.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully Updated!!`,
            showConfirmButton: true,
            showCancelButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/dashboard/profile");
            }
          });
        }
      }
      )




    }







  };

  function getOptions() {
    if (division == "Dhaka") {
      return (
        <>
          <option value="Dhaka">Dhaka</option>
          <option value="Gazipur">Gazipur</option>
          <option value="Manikganj">Manikganj</option>
          <option value="Munshiganj">Munshiganj</option>
          <option value="Narayanganj">Narayanganj</option>
          <option value="Narsingdi">Narsingdi</option>
          <option value="Tangail">Tangail</option>
          <option value="Faridpur">Faridpur</option>
          <option value="Gopalganj">Gopalganj</option>
          <option value="Jamalpur">Jamalpur</option>
          <option value="Kishoreganj">Kishoreganj</option>
          <option value="Madaripur">Madaripur</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Rajbari">Rajbari</option>
          <option value="Shariatpur">Shariatpur</option>
          <option value="Sherpur">Sherpur</option>
        </>
      );
    } else if (division == "Rajshahi") {
      return (
        <>
          <option value="Bogra">Bogra</option>
          <option value="Joypurhat">Joypurhat</option>
          <option value="Naogaon">Naogaon</option>
          <option value="Natore">Natore</option>
          <option value="Chapainawabganj">Chapainawabganj</option>
          <option value="Pabna">Pabna</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Sirajganj">Sirajganj</option>
        </>
      );
    } else if (division == "Rangpur") {
      return (
        <>
          <option value="Dinajpur">Dinajpur</option>
          <option value="Gaibandha">Gaibandha</option>
          <option value="Kurigram">Kurigram</option>
          <option value="Lalmonirhat">Lalmonirhat</option>
          <option value="Nilphamari">Nilphamari</option>
          <option value="Panchagarh">Panchagarh</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Thakurgaon">Thakurgaon</option>
        </>
      );
    } else if (division == "Khulna") {
      return (
        <>
          <option value="Bagerhat">Bagerhat</option>
          <option value="Chuadanga">Chuadanga</option>
          <option value="Jessore">Jessore</option>
          <option value="Jhenaidah">Jhenaidah</option>
          <option value="Khulna">Khulna</option>
          <option value="Kushtia">Kushtia</option>
          <option value="Magura">Magura</option>
          <option value="Meherpur">Meherpur</option>
          <option value="Narail">Narail</option>
          <option value="Satkhira">Satkhira</option>
        </>
      );
    } else if (division === "Barishal") {
      return (
        <>
          <option value="Barguna">Barguna</option>
          <option value="Barisal">Barisal</option>
          <option value="Bhola">Bhola</option>
          <option value="Jhalokati">Jhalokati</option>
          <option value="Patuakhali">Patuakhali</option>
          <option value="Pirojpur">Pirojpur</option>
        </>
      );
    } else if (division == "Sylhet") {
      return (
        <>
          <option value="Habiganj">Habiganj</option>
          <option value="Moulvibazar">Moulvibazar</option>
          <option value="Sunamganj">Sunamganj</option>
          <option value="Sylhet">Sylhet</option>
        </>
      );
    } else if (division == "Chattogram") {
      return (
        <>
          <option value="Bandarban">Bandarban</option>
          <option value="Brahmanbaria">Brahmanbaria</option>
          <option value="Chandpur">Chandpur</option>
          <option value="Chattogram">Chattogram</option>
          <option value="Cumilla">Cumilla</option>
          <option value="Cox's Bazar">Cox&apos;s Bazar</option>
          <option value="Feni">Feni</option>
          <option value="Khagrachhari">Khagrachhari</option>
          <option value="Lakshmipur">Lakshmipur</option>
          <option value="Noakhali">Noakhali</option>
          <option value="Rangamati">Rangamati</option>
        </>
      );
    } else if (division == "Mymensingh") {
      return (
        <>
          <option value="Jamalpur">Jamalpur</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Netrokona">Netrokona</option>
          <option value="Sherpur">Sherpur</option>
        </>
      );
    }
  }

  return (
    <div className="min-h-screen">
      <form
        className="py-10  lg:w-3/4 md:mx-4 lg:mx-auto mx-auto border rounded-lg md:px-8 lg:px-20 my-20 text-black dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl text-center py-4 font-semibold">
          Update Your Profile
        </h2>
        <div className="flex gap-6 ">
          {/* category */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              defaultValue={users?.name || ""}
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            />
          </div>

          {/* catagories */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Division*
              </span>
            </label>
            <select
              defaultValue={users?.address?.division || ""}
              {...register("division", { required: true })}
              className="select select-bordered w-full bg-white dark:bg-black text-black dark:text-white"
              onChange={(e) => setDivision(e.target.value)}
            >
              <option defaultValue="">Select Division</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Khulna">Khulna</option>
              <option value="Barishal">Barishal</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Mymensingh">Mymensingh</option>
            </select>
          </div>
        </div>
        <div className="flex gap-6">
          {/* category */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Email*
              </span>
            </label>
            <input
              type="text"
              placeholder="email"
              {...register("email", { required: true })}
              defaultValue={users?.email || ""}
              required
              className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            />
          </div>

          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                District*
              </span>
            </label>
            <select
              defaultValue={users?.address?.district || ""}
              {...register("district", { required: true })}
              className="select select-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            >
              <option defaultValue="">Select Division</option>
              {getOptions()}
            </select>
          </div>
        </div>
        <div className="flex gap-6">
          {/* category */}

          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Contact Number*
              </span>
            </label>
            <input
              type="text"
              placeholder="Contact Numebr"
              defaultValue={users?.phone || ""}
              {...register("phone", { required: true })}
              required
              className="input input-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            />
          </div>

          {/* price */}
          <div className="form-control w-full my-3">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select
              id="bloodGroup"
              {...register("bloodGroup")}
              className="select select-bordered w-full bg-white dark:bg-black text-black dark:text-white"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <div className="form-control w-full my-3 ">
          {/* { required: true } */}
          <input
            {...register("avatar")}
            type="file"
            className="file-input w-full max-w-xs bg-white  dark:bg-black text-black dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="btn bg-black text-white dark:bg-white dark:text-black"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default update;
