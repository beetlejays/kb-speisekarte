//// React
import React from "react"
import { Route, Routes } from "react-router-dom"
import Nav from "./Nav/Nav"

import Home from "./pages/Home";
import Fruehstueck from "./pages/Fruehstueck";




///// CSS
import "./App.css"


///// Setup
const App = () => {
    return(
        <>      
         <Nav />
        </>
    )
}


export default App