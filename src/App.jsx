import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import Gallery from "./Gallery"
import ClubMembership from "./ClubMembership"
import Documents from "./Documents"
import RagistrationForm from "./RagistrationForm"
import Notice from "./Notice"
import Payfee from "./Payfee"
import Benefits_Facilities from "./Benefits&Facilities"
import Terms_Conditions from "./Terms&Conditions"
import Declaration_Format from "./Declaration&Format"
import Vision from "./Vision"
import Objective from "./Objective"
import NYCL_Formed from "./NYCLFormed"
import Ability from "./Ability"
import Selector from "./Selector"
import Disqualification from "./Disqualification"


function App() {
  const [menu, setMenu] = useState(false)
  const [aboutMenu, setAboutMenu] = useState(false);
  const [docMenu, setDocMenu] = useState(false);
  console.log("a,d", aboutMenu, docMenu)
  const state = {
    aboutMenu,
    setAboutMenu,
    docMenu,
    setDocMenu,
    menu,
    setMenu
  }
  return (
    <BrowserRouter>

      <>
        <div className="flex flex-col h-screen  min-h-full">
          <div className="flex-grow">
            {/* Empty span tag for spacing */}
            <span className="flex-grow"></span>

            {/* Your existing content */}
            <div className="flex">
              {menu === true && <div className="flex">
                <Sidebar state={state} />
              </div>}
            </div>

            <Header state={state} />

            <Routes>
              <Route path="/" element={<Home state={state} />} />

              <Route path="/Gallery" element={<Gallery />} />

              <Route path="/Club_Membership" element={<ClubMembership />} />

              <Route path="/Documents" element={<Documents />} />

              <Route path="/Ragistration" element={<RagistrationForm />} />

              <Route path="/Notice" element={<Notice />} />

              <Route path="/PayFee" element={<Payfee />} />

              <Route path="/Terms_&_Conditions" element={<Terms_Conditions />} />

              <Route path="/Benefits_&_Facilities" element={<Benefits_Facilities />} />

              <Route path="/Declaration_Format" element={<Declaration_Format />} />

              <Route path="/Vision" element={<Vision />} />
              <Route path="/Ability" element={<Ability />} />
                            <Route path="/Selector"element={<Selector />} />
                                          <Route path="/Disqualification"element={<Disqualification />} />

              <Route path="/Objective" element={<Objective />} />
<Route path="/Why_NYCL_Was_Formed" element={<NYCL_Formed />} />

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