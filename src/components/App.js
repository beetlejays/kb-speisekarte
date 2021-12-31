//// React
import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Fruehstueck from "./pages/Fruehstueck";
import Suppen from "./pages/Suppen";
import Speisen from "./pages/Speisen";
import Salate from "./pages/Salate";
import Getraenke from "./pages/Getraenke";
import Spezialitaeten from "./pages/Spezialitaeten";
import Kuchen from "./pages/Kuchen";
import Nav from "./Nav/Nav"







///// CSS
import "./App.css"


///// Setup
const App = () => {
    return(
        <>
            

            <BrowserRouter>
               <Routes>
                <Route path="/" element={<Nav />} />        
                <Route path="/Fruehstueck" element={<Fruehstueck />} / >
                <Route path="/Suppen" element={<Suppen />} / >
                <Route path="/Speisen" element={<Speisen />} / >
                <Route path="/Salate" element={<Salate />} / >
                <Route path="/Getraenke" element={<Getraenke />} / >
                <Route path="/Kuchen" element={<Kuchen />} / >
                <Route path="/Spezialitaeten" element={<Spezialitaeten />} / >
                    
                </Routes> 
            
            </BrowserRouter>
           
        </>
    )
}


export default App