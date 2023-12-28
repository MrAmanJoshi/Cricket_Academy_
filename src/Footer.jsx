import React, { memo } from "react";
import { CiFacebook, CiInstagram, CiYoutube, CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className=" pt-6 pb-1 px-2  bg-blue-700">

      <p className=" text-center  text-neutral-200 sm:text-4xl text-2xl font-bold mt-8 mb-5 font-serif">Contact Us</p>
      <div className="flex-col">
        <div className="flex justify-center mb-5">
          <FiPhoneCall className="text-xl text-white mr-2" />
          <p className="text-white sm:text-lg mr-1 font-serif"> 7298543999</p>
<FiPhoneCall className="text-xl text-white ml-4 mr-2" />
          <p className="text-white sm:text-lg mr-1 font-serif"> 8650555532</p>
        </div>

        
        <div className="flex justify-center mb-5 text-center text-white">
          <HiOutlineMail className="text-xl mt-1 mr-2" />
          <p className="text-lg">nationalyoungcricketleague@gmail.com</p>
        </div>
        <div className="flex justify-center text-white sm:text-lg mr-1 ">
          <CiLocationOn className="text-2xl text-white mr-2" />

          <div>
            <p className="text-white sm:text-lg mr-1 text-center ">Near Dharamshala, Haldwani Road, Tallital Nainital, 263002 </p>

          </div>
        </div>
      </div>

      <p className=" text-center text-white sm:text-2xl mt-5 font-medium font-serif"> Social Media Handles</p>

      <div className=" flex justify-center  my-5 sm:mt-34">
        <a target="_blank" href=" https://www.facebook.com/profile.php?id=100094302097946&mibextid=D4KYlr" > <CiFacebook className="text-3xl text-white mr-5" /></a>

        <a target="_blank" href="https://instagram.com/nationalcricleagueuk?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" > <CiInstagram className="text-3xl text-white mr-5" /></a>



        <a target="_blank" href="https://www.youtube.com/@NationalYoungCricketLeague"> <CiYoutube className="text-3xl text-white mr-5" /></a>

      </div>

      <p className="text-center font-medium mt-8 text-white sm:text-lg font-serif">Copyright ©2023 All rights reserved </p>
    </div>

  )
}

export default memo(Footer);