//// React
import React from "react"
import Nav from "./Nav/Nav"
import Header from "./Header/Header"
import Navitem from "./Navitem/Navitem"

///// CSS
import "./App.css"
import Fruehstueck from "./pages/Fruehstueck"


///// Setup
const App = () => {
    return(
        <>      
        <Nav />
        
        <Navitem  name="Fruehstueck" />
        <Navitem  name="Speisen" />
        <Navitem  name="Suppen" />
        <Navitem  name="Kuchen" />
        <Navitem  name="Getränke" />
        <Navitem  name="Spezialitäten" />
        <Navitem  name="Kuchen" />
        </>
    )
}


export default App