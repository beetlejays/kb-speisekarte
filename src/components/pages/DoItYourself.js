import React from "react"
import fruehstueck_doityourself from "../content/DoItYourselfSeed"
import BackBtn from "../Buttons/BackButton/BackButton";
import ScrollToTop from "../Buttons/ScrollToTop/ScrollToTop"
import { Link } from "react-router-dom";


const DoItYourself = () => {
	return (
        <>
        <header>
            <div className="head__section">
                <h1 className="center">Frühstück</h1>
				<h3>"Do it yourself"</h3>
            </div>
        </header>
        <div className="back">
          <Link to="/"><BackBtn /></Link>  
        </div>
		<div className="container__fluid">
			
			<p className="speisen__subhead">
				#ichstellmirmeinfrühstückselbstzusammen
			</p>
			
			{ fruehstueck_doityourself.map ( (items) => {
					
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
		</div>
		<ScrollToTop />
        </>
	);
    
};

export default DoItYourself;