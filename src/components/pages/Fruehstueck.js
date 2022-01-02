import React from "react"
import fruehstuecke_speisen from "../content/fruehstueck"



const Fruehstueck = () => {
    return (        


<div className="container__fluid">

           <h1 className="center">Frühstücke</h1>
         
            

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