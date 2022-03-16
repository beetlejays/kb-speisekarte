import React from "react"
import fruehstuecke_speisen from "../content/fruehstueck"
import BackBtn from "../Buttons/BackButton/BackButton";
import ScrollToTop from "../Buttons/ScrollToTop/ScrollToTop"
import { Link } from "react-router-dom";


const Fruehstueck = () => {
	return (
        <>
        <header>
            <div className="head__section">
                <h1 className="center">Frühstücke</h1>
				<h3>"Was zum Krümeln"</h3>
            </div>
        </header>
        <div className="back">
          <Link to="/"><BackBtn /></Link>  
        </div>
		<div className="container__fluid">
			
		

			
			
			{ fruehstuecke_speisen.map ( (items) => {
					
				return (
					<div className="speisen__item">
						<h2 key="{ title }"> { items.title } </h2>
						<p className="desc" key=" { description } ">
							{ items.description }
						</p>
						<span className="speisen__price" key=" { price } ">
							{ items.price }
							<span> EUR</span>{" "}
						</span>

						{ items.alt_one &&
						<div className="flex alt__price">	
						  { items.alt_one }  { items.alt_one_price } <span> EUR</span>{" "}
						</div>
						} 


					</div>
				);
			})}

<p className="speisen__subhead">
				Teilen Sie sich ein Frühstück für eine Person, berechnen wir einen Aufpreis von 2.50 EUR.
			</p>
		</div>
		<ScrollToTop />
        </>
	);
    
};

export default Fruehstueck;