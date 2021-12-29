import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home";
import Fruehstueck from "../pages/Fruehstueck";
import Suppen from "../pages/Suppen";

const Nav = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
            <Route path="/Home" element={<Home />} / >
            <Route path="/Fruehstueck" element={<Fruehstueck />} / >
            <Route path="/Suppen" element={<Suppen />} / >            
            </Routes>
        </BrowserRouter>
        </>
    )
}






export default Nav