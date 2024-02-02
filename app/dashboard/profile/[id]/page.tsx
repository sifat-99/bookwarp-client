"use client";
import AllUser from "@/app/AllUser";
import CurrentUser from "@/app/CurrentUser";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateProfile = (props: any) => {
  const { id } = props.params;
  const currentUser:any = CurrentUser();
  const session = useSession();
  const [division, setDivision] = useState(currentUser?.address?.division);
  const [district, setDistrict] = useState(currentUser?.address?.district);
  const [userName, setUserName] = useState(currentUser?.name);
  const [avatar, setAvatar] = useState(currentUser?.avatar);
  const [bloodGroup, setBloodGroup] = useState(currentUser?.bloodGroup);

  console.log(currentUser)

  const { email, name, bloodGroup: bg, phone, image } = currentUser as any;

  const userData = {
    email: session?.data?.user?.email,
    name: userName,
    avatar: avatar,
    bloodGroup: bloodGroup,
    address: {
      division: division,
      district: district,
    },
  };
  const imageApiKey = "bab4d97c38be2795b4cdd088d2eecbf7";

  
    const handleUpdateInfo = async(e: any) => {
      e.preventDefault();

      // const form = new FormData(e.target);
      // const imageFile = form.get("avatar");

      // const data = new FormData();
      // if (imageFile) {
      //   data.append("file", imageFile);

      //   // Upload image to image hosting service
      //   fetch("https://api.imagebb.com/1/upload?key=1b258f535ebc57322b29944121f24ff5", {
      //     method: "POST",
      //     body: data,
      //     mode: "same-origin"
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       const imageUrl = data.data.url;

      //       // Update user info with the new image URL
      //       const updatedUserData = {
      //         ...userData,
      //         avatar: imageUrl,
      //       };

      //       fetch(`https://bookwarp-server.vercel.app/users/update/${email}`, {
      //         method: "PUT",
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify(updatedUserData),
      //       })
      //         .then((response) => response.json())
      //         .then((data) => {
      //           console.log(data);
      //         })
      //         .catch((error) => console.log(error));
      //     })
      //     .catch((error) => console.log(error));
      // } else {
      //   // Update user info without changing the image
      //   axios
      //     .put(`https://bookwarp-server.vercel.app/users/update/${email}`, userData)
      //     .then((res) => {
      //       console.log(res.data);
      //     })
      //     .catch((err) => console.log(err));
      // }

      // Update user info without changing the image
   axios.put(`https://bookwarp-server.vercel.app/users/update/${email}`, userData)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Profile Updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err));
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
    <div>
      <form onSubmit={handleUpdateInfo}>
        <div className="grid gap-4 mb-4 sm:grid-cols-2 mt-12 w-3/4 mx-auto text-black dark:text-white border p-8 rounded-lg">
          {/* name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              onChange={(e: any) => setUserName(e?.target?.value)}
              defaultValue={name || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your name"
            />
          </div>
          {/* email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              onChange={(e: any) => setUserName(e.target?.value)}
              defaultValue={session.data?.user?.email || ""}
              className="bg-gray-50 border border-gray-300 disabled text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type your email"
              disabled
            />
          </div>
          {/* Avatar */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Avatar
            </label>
            <input
              type="file"
              name="avatar"
              className="file-input file-input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Note"
            />
          </div>
          {/* Blood Group */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Blood Group
            </label>
            <select
              name="bloodGroup"
              onChange={(e: any) => setBloodGroup(e.target?.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option defaultValue={bg}>Select Group</option>
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
          {/* Division */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Division
            </label>
            <select
              onChange={(e: any) => setDivision(e.target?.value)}
              name="Division"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
          {/* Category */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              District
            </label>
            <select
              name="District"
              onChange={(e: any) => setDistrict(e.target?.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              {/* <option defaultValue="">Select District</option> */}
              {getOptions()}
            </select>
          </div>
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              defaultValue={phone || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type your phone number"
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-red-500 text-white  inline-flex items-center  font-medium rounded-lg text-sm px-5 py-2.5 text-center w-24  "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
