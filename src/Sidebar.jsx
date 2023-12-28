import React, { memo, useState } from 'react';
import { Link } from "react-router-dom";
import {MdOutlineClose} from "react-icons/md";
import {docHead,aboutHead, scrollMenu} from "./Data"


const Sidebar = ({state}) => {
  

	return (
		<div className="font-serif flex flex-col items-center min-h-screen w-full z-50 bg-gradient-to-r from-orange-400 bg-cyan-400 fixed top-0  left-0 right-0 touch-pan-y text-center text-lg font-medium touch-auto">
    <div className="w-full flex justify-end mr-5 mt-5">
       
       { state.menu === true && <button className="mx-2 text-4xl text-end" onClick={()=>(state.setMenu(false))} ><MdOutlineClose/></button>
       }
    </div>
			<div className="mt-1 flex flex-col">
				{scrollMenu.map(s => (
					<div key={s.id} className="mb-5 text-center  text-lg font-medium">
						
							<Link
								to={s.title === "Home" ? "/" : `/${s.title}`}
onClick={() => state.setMenu(false)}>
								{s.title}
							</Link>
						
					</div>
				))}

      
        <button onClick={()=>{state.setAboutMenu(state.aboutMenu ? false : true),state.setDocMenu(false)}}>About Us</button>
        { state.aboutMenu &&
          <div className="w-[190px] text-blue-900  flex flex-col p-2 touch-pan-y">
          { aboutHead.map((items, index)=>(
    <div className="mb-1" key={index}>
    <Link to={`/${items}`}	onClick={() => state.setMenu(false)}>{items}</Link>
    </div>  )) }
          </div>
          
        }
                  <button className="mt-5" onClick={()=>{state.setDocMenu(state.docMenu ? false : true), state.setAboutMenu(false)}}>Documentation</button>
        { state.docMenu &&
          <div className="w-[190px] text-blue-900 flex flex-col p-2 touch-pan-y">
          { docHead.map((items, index)=>(
    <div className="mb-1" key={index}>
    <Link to={`/${items}`}		onClick={() => state.setMenu(false)}>{items}</Link>
    </div>        
    )) 
    }
     </div>
        }
      
			</div>
		</div>
	);
};

export default memo(Sidebar);
