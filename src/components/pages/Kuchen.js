import React from "react"
import BackBtn from "../Buttons/BackButton/BackButton";
import ScrollToTop from "../Buttons/ScrollToTop/ScrollToTop"
import { Link } from "react-router-dom";

const Kuchen = () => {
    return(
        <>
        <header>
            <div className="head__section">
                <h1 className="center">Kuchen</h1>
				<h3>"Süßes geht immer"</h3>             
            </div>
        </header>
        <div className="back">
          <Link to="/"><BackBtn /></Link>  
        </div>
        <div className="container__fluid">
            <h2>„Kuchen macht nicht dick! Er zieht nur die Falten glatt!</h2>
        <p className="speisen__subhead" >
        Unsere Kuchentheke bietet für jeden Süßschnabel die richtige Leckerei!
Neben warmem Apfelstrudel mit Vanilleeis und Sahne verführen/verzaubern/verlocken wir Sie mit zahlreichen bunten Kuchen, Torten und Schnittchen. </p>
<p className="speisen__subhead" >Außerdem bieten wir täglich leckere Alternativen, die vegan, laktosefrei oder glutenfrei sind, an.
Da die tägliche Auswahl variiert, bitten wir Sie, an unserer Kuchentheke vorbeizuschauen. 

        </p>
        </div>
      
		<div className="container__fluid">
		

		</div>
		<ScrollToTop />
        </>
    )
}

export default Kuchen