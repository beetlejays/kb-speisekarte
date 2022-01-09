import React from "react";
import { Link } from "react-router-dom"
import Navitem from "../Navitem/Navitem"
import Logo from "../Logo/Logo"



const Nav = () => {
    return(
        <>
          <Logo />
          <nav className="container">
           <Link to="/Fruehstueck"> <Navitem name="Frühstück" /></Link>
           <Link to="/Speisen"> <Navitem name="Speisen" /></Link>
           <Link to="/Heissgetraenke"> <Navitem name="Heissgetränke" /></Link>
           <Link to="/Getraenke"> <Navitem name="Getränke" /></Link>
           <Link to="/Saefte"> <Navitem name="Säfte" /></Link>
           <Link to="/Kuchen"> <Navitem name="Kuchen" /></Link>
          </nav>

       


        
        </>
    )
}






export default Nav