import React from "react";
import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home";
import Fruehstueck from "../pages/Fruehstueck";
import Navitem from "../Navitem/Navitem"

const Nav = () => {
    return(
        <>
       
            <Routes>
              <Route path="/" element={<Home />} / >
              <Route path="/Fruehstueck" element={<Fruehstueck />} / > 
            </Routes>

            <div className="container">        
               <Navitem  name="Frühstück" />
               <Navitem  name="Speisen" />
               <Navitem  name="Suppen" />
               <Navitem  name="Kuchen" />
               <Navitem  name="Getränke" />
               <Navitem  name="Spezialitäten" />                             
            </div>  



        
        </>
    )
}






export default Nav