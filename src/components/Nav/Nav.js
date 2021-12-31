import React from "react";
import { Link } from "react-router-dom"
import Navitem from "../Navitem/Navitem"

const Nav = () => {
    return(
        <>
          <nav className="container">
           <Link to="/Fruehstueck"> <Navitem name="Frühstück" /></Link>
           <Link to="/Speisen"> <Navitem name="Speisen" /></Link>
           <Link to="/Suppen"> <Navitem name="Suppen" /></Link>
           <Link to="/Salate"> <Navitem name="Salate" /></Link>
           <Link to="/Getraenke"> <Navitem name="Getränke" /></Link>
           <Link to="/Kuchen"> <Navitem name="Kuchen" /></Link>
           <Link to="/Spezialitaeten"> <Navitem name="Spezialitäten" /></Link>
          </nav>

       


        
        </>
    )
}






export default Nav