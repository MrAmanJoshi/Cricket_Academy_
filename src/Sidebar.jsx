import React, { memo } from 'react';
import { scrollMenu } from './Header';
import { Link } from "react-router-dom";

import {MdOutlineClose} from "react-icons/md";

const Sidebar = ({ setMenu, menu }) => {
	return (
		<div className="font-serif flex flex-col items-center w-full z-50 bg-gradient-to-r from-orange-400 bg-cyan-400 fixed top-0 bottom-0 left-0 right-0">
    <div className="w-full flex justify-end mr-5 mt-5">
       
       { menu === true && <button className="mx-2 text-3xl text-end" onClick={()=>(setMenu(false))} ><MdOutlineClose/></button>
       }
    </div>
			<div className="mt-1 touch-pan-y">
				{scrollMenu.map(s => (
					<div key={s.id}>
						<p className=" mt-5 text-center hover:text-red-500 text-lg font-medium ">
							<Link
								to={s.title === "Home" ? "/" : `/${s.title}`}
								
								onClick={() => setMenu(false)}
							>
								{s.title}
							</Link>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default memo(Sidebar);
