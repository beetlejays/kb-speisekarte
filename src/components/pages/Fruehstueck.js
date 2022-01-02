import React from "react"
import fruehstuecke_speisen from "../content/fruehstueck"



const Fruehstueck = () => {
    return (        


<div className="container__fluid">

           <h1 className="center">Frühstücke</h1>
         <p className="speisen__subhead">In unseren Frühstücken ist jeweils ein Heißgetränk nach Wahl inklusive:Café Crema, Cappuccino, Milchkaffee, Latte Macchiato, Espresso, heiße Schokolade, Tee. Möchtest du lieber eine unserer Spezialitäten, berechnen wir einen Aufpreis von 50 Cent.</p>
            

                {
                    fruehstuecke_speisen.map( (items) => {
                        return (
                        <div className="speisen__item">
                        <h2 key="{title}">{ items.title }</h2>
                        <p className="desc" key="{description}">{ items.description }</p>
                        <p className="speisen__price" key="{price}">{ items.price }<span> EUR</span> </p>    
                        </div>
                        )
                    })
                }

                      
            
            </div>

       
    )
}

export default Fruehstueck