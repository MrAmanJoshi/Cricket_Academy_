import React, { memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom"

export const scrollMenu = [
  { title: "Home", id: 1 },
  { title: "About_Us", id: 2 },
  { title: "Gallery", id: 3 },
  { title: "Club_Membership", id: 4 },
  { title: "Documents", id: 5 },
  { title: "Code_Of_Conduct", id: 6 },

  { title: "Registration", id: 7 },
  { title: "Contact", id: 8 }
];
const Header = ({ menu, setMenu }) => {

  return <div className=" flex sm:flex-col py-2 sm:pb-0 align-center justify-between justify-center drop-shadow-lg shadow-green-300 fixed top-0 left-0 right-0 bg-cyan-300 z-10">

    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://i.postimg.cc/rp3rbQxK/Logo.png" className="w-[250px] h-[90px] object-cover" />

        <div className="hidden w-64 sm:block ml-5 font-bold text-lg text-red-500">
          <p >National Young Cricket League</p>
          <p>Afflicted to NYK minister of youth affairs and sports</p>
          <div className="flex text-red-500">
            <HiOutlineMail className="text-xl" />
            <p className="text-lg">nationalyoungcricketleague@gmail.com</p>
          </div>

          <div className="flex align-center mt-2 text-red-500">

            <FiPhoneCall className="text-xl text-red-500 mr-2 mt-1" />
            <p className=" text-lg"> 7298543999</p>

          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-end text-lg font-bold text-red-500 sm:mr-4 ">
        <p className="text-red-600 hidden sm:block">NYCL is the branch of "K.J.J.I"</p>
        <p className="text-red-600 hidden sm:block">(Khelega India, Jeetega India)</p>
        <button className="px-2 py-1 bg-red-500 hover:bg-lime-400 text-lg font-bold text-white hidden sm:block  rounded-lg mt-4">Register Now</button>

      </div>

    </div>

    <div className="mt-1 sm:mt-2">

      <div className="hidden sm:block sm:flex justify-center bg-lime-400 p-2 ">
        {
          scrollMenu.map((s) => (
            <div key={s.id} id={s.id} className="text-blue-800 font-bold mx-2 text-lg hover:text-red-700 ">
              <Link to={s.title !== "Home" ? `/${s.title}` : "/"} > {s.title} </Link>
            </div>
          ))
        }
      </div>
      <div className="block sm:hidden  flex mr-2 flex-col items-end">

        {menu === false && <button onClick={() => (setMenu(true))} className=" text-3xl text-end font-bold "><GiHamburgerMenu /></button>}
        <button className="px-[6px] mt-7 py-1 bg-red-500 hover:bg-orange-600 text-sm font-bold text-white  rounded-lg ">Register Now</button>

      </div>
    </div>
  </div>
}

export default memo(Header);