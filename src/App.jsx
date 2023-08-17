import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Home from "./Home";
import AboutUs from "./AboutUs"
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import Gallery from "./Gallery"
import ClubMembership from "./ClubMembership"
import Documentation from "./Documentation"


function App() {
  const [menu, setMenu] = useState(false)
  return (
<BrowserRouter>
    
    <>    
        <div className="flex flex-col h-screen">
  <div className="flex-grow">
    {/* Empty span tag for spacing */}
    <span className="flex-grow"></span>

    {/* Your existing content */}
    <div className="flex">
      {menu === true && <div className="flex"><Sidebar setMenu={setMenu} menu={menu} /></div>}
    </div>
    
    <Header setMenu={setMenu} menu={menu} />



    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About_Us" element={<AboutUs />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Club_Membership" element={<ClubMembership />} />
            <Route path="/Documents" element={<Documentation />} />
      
    </Routes>
  </div>

  {/* Footer */}
  <Footer />
</div>      
    </>
</BrowserRouter>
  );
}

export default App;