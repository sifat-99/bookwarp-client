"use client"
import Lottie from 'lottie-react';
import { useForm, ValidationError } from "@formspree/react";
import msgAnimation from './mail_animation.json'
import { FaPhone } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const ContactUs = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, handleSubmit] = useForm<any>("mqkreqrg");
  if (state.succeeded) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully sent message",
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(function() {
      window.location.reload();
  }, 1500)
}
    return (
        <div className="px-5 lg:px-0 my-10 ">
            <div className="hero lg:h-[550px] dark:border-2 bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] dark:from-[#0d0d0d] to dark:bg-[#010101] text-black pb-6 rounded-lg md:mb-10">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                  <Lottie className="z-0 md:h-[400px] lg:h-[600px]" animationData={msgAnimation}/>
                </div>               
                <div className="flex-shrink-0 w-full rounded-tl-[50px] rounded-br-[50px] max-w-sm  lg:m-14">
                  <form className="card-body" onSubmit={handleSubmit}>
                    <h1 className="font-semibold text-white mb-3">Contact US</h1>
                    <div className="form-control">
                      <input type="text" placeholder="Your Name" name="user_name" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                      <input type="email" placeholder="Your E-mail" id='email' name="email" className="input input-bordered text-black" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </div>
                    <div className="form-control">
                    <textarea placeholder="Your Message" name="message" id='message' className="input input-bordered text-black pt-3 h-20" required />
                    <ValidationError  prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-[#8e9dbe] text-white border-none" disabled={state.submitting}>Send Message</button>
                    </div>
                    <div className="flex items-center gap-3 text-white mt-5">
                        <FaPhone/>
                        <p className="text-white">Call us on : <span className="font-semibold">2879354</span></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ContactUs;