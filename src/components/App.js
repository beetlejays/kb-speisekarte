//// React
import React from "react"

import Nav from "./Nav/Nav"

import Navitem from "./Navitem/Navitem"

///// CSS
import "./App.css"
//import Fruehstueck from "./pages/Fruehstueck"


///// Setup
const App = () => {
    return(
        <>      
        <Nav />
        <div className="container">
          <Navitem  name="Frühstück" />
            <Navitem  name="Speisen" />
            <Navitem  name="Suppen" />
            <Navitem  name="Kuchen" />
            <Navitem  name="Getränke" />
            <Navitem  name="Spezialitäten" />
        </div>
        </>
    )
}


export default App