import React from "react"
import BackBtn from "../Buttons/BackButton/BackButton";
import ScrollToTop from "../Buttons/ScrollToTop/ScrollToTop"
import { Link } from "react-router-dom";

const Speisen = () => {
    return(
        <>
        <header>
            <div className="head__section">
                <h1 className="center">Kuchen</h1>
				<h3>"Süßes geht immer"</h3>             
            </div>
        </header>
        <div className="container__fluid">
        <p className="speisen__subhead" >Bitte schaut euch bei unserer Kuchentheke um, da wir immer unterschiedliche Leckereien haben :)</p>
        </div>
        <div className="back">
          <Link to="/"><BackBtn /></Link>  
        </div>
		<div className="container__fluid">
		

		</div>
		<ScrollToTop />
        </>
    )
}

export default Speisen