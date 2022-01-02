import React from "react"
import kb_getraenke from "../content/GetraenkeSeed"
import BackBtn from "../Buttons/BackButton/BackButton";
import ScrollToTop from "../Buttons/ScrollToTop/ScrollToTop"
import { Link } from "react-router-dom";


const Fruehstueck = () => {
	return (
        <>
        <header>
            <div className="head__section">
                <h1 className="center">Getränke</h1>
				<h3>"Flüssiges, Flottes, Spritziges"</h3>
            </div>
        </header>
        <div className="back">
          <Link to="/"><BackBtn /></Link>  
        </div>
		<div className="container__fluid">
			{kb_getraenke.map((items) => {
				return (
					<div className="speisen__item">
						<h2 key="{title}">{items.title}</h2>
					
						<p className="speisen__price" key="{price}">
							{items.price}
							<span> EUR</span>{" "}
						</p>
					</div>
				);
			})}
		</div>
		<ScrollToTop />
        </>
	);
    
};

export default Fruehstueck;