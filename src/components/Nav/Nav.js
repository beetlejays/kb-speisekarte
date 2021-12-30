import React from "react";
import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home";
import Fruehstueck from "../pages/Fruehstueck";
import Suppen from "../Suppen";

const Nav = () => {
    return(
        <>
       
            <Routes>
            <Route path="/" element={<Home />} / >
              <Route path="/Fruehstueck" element={<Fruehstueck />} / > 
            <Route path="/Suppen" element={<Suppen />} / >            
            </Routes>
        
        </>
    )
}






export default Nav