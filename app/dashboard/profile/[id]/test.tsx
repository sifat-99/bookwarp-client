import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const UpdateProfile = () => {
  const { data: session } = useSession();

  const [division, setDivision] = useState<string>('');

    type Inputs = {
        name: string;
        email: string;
        avatar?: FileList;
        bloodGroup: string;
        division: string;
        district: string;
        phone: string;
        };

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();





  const onSubmit = async (formData: any) => {

    console.log(formData.division)


    try {
      const response = await axios.put(`https://bookwarp-server.vercel.app/users/update/${session?.user?.email}`, formData);
      console.log(response.data);

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Profile Updated Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" {...register('name')} defaultValue={session?.user?.name} />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" {...register('email')} defaultValue={session?.user?.email} disabled />
        </div>

        {/* Avatar */}
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input type="file" id="avatar" {...register('avatar')} />
        </div>

        {/* Blood Group */}
        <div>
          <label htmlFor="bloodGroup">Blood Group</label>
          <select id="bloodGroup" {...register('bloodGroup')} defaultValue={session?.user?.bloodGroup}>
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
            <label htmlFor="division">Division</label>
            <select  id="division" {...register('division')} defaultValue={session?.user?.address?.division}>
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

        {/* District */}
        <div>
          <label htmlFor="district">District</label>
          <select id="district" {...register('district')} defaultValue={session?.user?.address?.district}>
            {getOptions()}
          </select>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" {...register('phone')} defaultValue={session?.user?.phone} />
        </div>

        {/* Submit button */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
