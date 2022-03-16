import React from "react"
import kb_heissgetraenke from "../content/HeissgetraenkeSeed"
import BackBtn from "../Buttons/BackButton/BackButton";
import ScrollToTop from "../Buttons/ScrollToTop/ScrollToTop"
import { Link } from "react-router-dom";

const Speisen = () => {
    return(
        <>
        <header>
            <div className="head__section">
                <h1 className="center">Heissgetränke</h1>
				<h3>"Heiss - süss - wach"</h3>
               
            </div>
        </header>
        <div className="back">
          <Link to="/"><BackBtn /></Link>  
        </div>
		<div className="container__fluid">
		<p className="speisen__subhead">Alle Getränke auch möglich mit Hafermilch + 0,50 EUR</p>

			{ kb_heissgetraenke.map( (items) => {
				return (
					<div className="speisen__item">
						<h2 key="{title}">{items.title}</h2>
						<p className="desc" key="{description}">
							{items.description}
						</p>
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
    )
}

export default Speisen