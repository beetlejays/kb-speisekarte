import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home";
import Fruehstueck from "../pages/Fruehstueck";
import Suppen from "../pages/Suppen";
import Navitem from "../Navitem/Navitem"

const Nav = () => {
    return(
        <>
          <nav className="container">
          <Navitem name="Frühstück" />
          <Navitem name="Speisen" />
          <Navitem name="Suppen" />
          <Navitem name="Salate" />
          <Navitem name="Getränke" />
          <Navitem name="Kuchen" />
          <Navitem name="Spezialitäten" />
          </nav>

       


        
        </>
    )
}






export default Nav