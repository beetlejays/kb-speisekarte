//// React
import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Fruehstueck from "./pages/Fruehstueck";
import DoItYourself from "./pages/DoItYourself";
import Suppen from "./pages/Suppen";
import Speisen from "./pages/Speisen";
import Heissgetraenke from "./pages/Heissgetraenke";
import Getraenke from "./pages/Getraenke";
import Saefte from "./pages/Saefte";
import Kuchen from "./pages/Kuchen";
import Nav from "./Nav/Nav"







///// CSS
import "./App.css"


///// Setup
const App = () => {
    return(
        <div className="bg">
            

            <BrowserRouter>
               <Routes>
                <Route path="/" element={<Nav />} />        
                <Route path="/Fruehstueck" element={<Fruehstueck />} / >
                <Route path="/DoItYourself" element={<DoItYourself />} / >
                <Route path="/Suppen" element={<Suppen />} / >
                <Route path="/Speisen" element={<Speisen />} / >
                <Route path="/Heissgetraenke" element={<Heissgetraenke />} / >
                <Route path="/Getraenke" element={<Getraenke />} / >
                <Route path="/Saefte" element={<Saefte />} / >
                <Route path="/Kuchen" element={<Kuchen />} / >
                    
                </Routes> 
            
            </BrowserRouter>
            
            </div>
    )
}


export default App