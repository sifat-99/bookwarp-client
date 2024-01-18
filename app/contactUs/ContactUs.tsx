"use client"
import Lottie from 'lottie-react';
import msgAnimation from './mail_animation.json'
import { FaPhone } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const contactUs = () => {
    
    return (
        <div className="px-5 lg:px-0 my-10">
            <div className="hero lg:h-[550px] bg-gradient-to-r from-[#4a8ab8] to bg-[#34c1ce] rounded-lg md:mb-10">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                  <Lottie className="z-0 md:h-[400px] lg:h-[600px]" animationData={msgAnimation}/>
                </div>               
                <div className="flex-shrink-0 w-full rounded-tl-[50px] rounded-br-[50px] max-w-sm  lg:m-14">
                  <form className="card-body">
                    <h1 className="font-semibold text-white mb-3">Contact US</h1>
                    <div className="form-control">
                      <input type="text" placeholder="Your Name" name="user_name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <input type="email" placeholder="Your E-mail" name="user_email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <textarea placeholder="Your Message" name="message" className="input input-bordered pt-3 h-20" required />
                    </div>
                    <div className="form-control mt-6">
                      <button  className="btn bg-[#8e9dbe] text-white border-none">Send Message</button>
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

export default contactUs;