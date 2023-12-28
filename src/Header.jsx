import React, { memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { aboutHead, docHead, scrollMenu } from "./Data"


const Header = ({ state }) => {

  return <div className="flex sm:flex-col py-2 sm:pb-0 align-center justify-between justify-center drop-shadow-lg shadow-green-300 fixed top-0 left-0 right-0 bg-cyan-300 z-10">

    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://i.postimg.cc/rp3rbQxK/Logo.png" className="w-[250px] h-[90px] object-cover" />

        <div className="hidden w-64 sm:block ml-5 font-bold sm:text-lg text-red-500">
          <p >National Young Cricket League</p>
          <p>Afflicted to NYK minister of youth affairs and sports</p>
          <div className="flex text-red-500">
            <HiOutlineMail className="text-xl" />
            <p className="text-lg">nationalyoungcricketleague@gmail.com</p>
          </div>

          <div className="flex align-center mt-2 text-red-500">

            <FiPhoneCall className="text-xl text-red-500 mr-2 mt-1" />
            <p className=" text-lg"> 7298543999,</p>
            <p className=" text-lg ml-2"> 8650555532</p>

          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-end text-lg font-bold text-red-500 sm:mr-4 max-w-48">
        <p className="text-red-600 hidden sm:block">NYCL is the branch of "K.J.J.I"</p>
        <p className="text-red-600 hidden sm:block">(Khelega India, Jeetega India)</p>
        <Link to="/Ragistration" className="px-2 py-1 bg-red-500 hover:bg-red-600 text-lg font-bold text-white hidden sm:block  rounded-lg mt-4">Register Now</Link>

      </div>

    </div>

    <div className="sm:mt-2">

      <div className="hidden sm:block sm:flex justify-center bg-lime-400 p-2 ">
        {
          scrollMenu.map((s) => (
            <div key={s.id} id={s.id} className="text-blue-800 font-bold sm:mr-3 text-lg hover:text-red-700 ">
              <Link to={s.title !== "Home" ? `/${s.title}` : "/"} > {s.title} </Link>
            </div>
          ))
        }
        <button className="text-blue-800 font-bold sm:mr-3 text-lg hover:text-red-700 " onClick={() => { state.setAboutMenu(state.aboutMenu === true ? false : true), state.setDocMenu(false) }}>About Us</button>
        <button onClick={() => { state.setDocMenu(state.docMenu === true ? false : true), state.setAboutMenu(false) }} className="text-blue-800 font-bold text-lg hover:text-red-700 ">Documentation</button>
      </div>
      <div className="block sm:hidden  flex mr-2 flex-col items-end">

        {state.menu === false && <button onClick={() => (state.setMenu(true))} className=" text-3xl text-end font-bold "><GiHamburgerMenu /></button>}

        <Link to={"/Ragistration"} className="px-2 py-1 bg-red-500 hover:bg-red-600 text-sm font-bold text-white block sm:hidden  rounded-lg mt-4">Register Now</Link>

      </div>
    </div>
<div className="hidden sm:block z-30">
          <div className="w-full text-blue-900 fixed top-[260px] flex justify-end text-center">
            {state.aboutMenu === true &&
              <div className=" h-[170px] bg-red-500 border border-red-600 mr-5 px-2 fixed top-[208px] right-[120px] font-bold">
                {aboutHead.map((items, index) => (
                  <div className="mb-1 " key={index}>
                    <Link	to={`/${items}`}	onClick={()=>{state.setAboutMenu(false)}}>{items}</Link>
                  </div>))}
              </div>}

            {state.docMenu === true &&
              <div className=" h-[170px] bg-red-500 border border-red-400 mr-5 px-2 fixed top-[208px] right-[30px] font-bold">
                {docHead.map((items, index) => (
                  <div className="mb-1 " key={index}>
                    <Link	to={`/${items}`}	onClick={()=>{state.setDocMenu(false)}}>{items}</Link>
                  </div>))}

              </div>
            }
          </div>
</div>
  </div>
}

export default memo(Header);