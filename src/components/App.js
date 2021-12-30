//// React
import React from "react"
import Navitem from "./Navitem/Navitem"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Fruehstueck from "./pages/Fruehstueck";
import Suppen from "./pages/Suppen";
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
                    
                </Routes> 
            
            </BrowserRouter>
           
        </>
    )
}


export default App