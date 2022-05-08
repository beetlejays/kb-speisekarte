import React from "react";
import mittagessen_speisen from "../content/MittagessenSeed";
import BackBtn from "../Buttons/BackButton/BackButton";
import ScrollToTop from "../Buttons/ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";

const Mittagessen = () => {
  return (
    <>
      <header>
        <div className="head__section">
          <h1 className="center">Mittagessen</h1>
          <h3>"Herzhaftes und leichtes zum Mittag"</h3>
        </div>
      </header>
      <div className="back">
        <Link to="/">
          <BackBtn />
        </Link>
      </div>
      <div className="container__fluid">
        {mittagessen_speisen.map((items) => {
          return (
            <div className="speisen__item">
              <h2 key="{ title }"> {items.title} </h2>
              <p className="desc" key=" { description } ">
                {items.description}
              </p>
              <span className="speisen__price" key=" { price } ">
                {items.price}
                <span> EUR</span>{" "}
              </span>

              {items.alt_one && (
                <div className="flex alt__price">
                  {items.alt_one} {items.alt_one_price}{" "}
                  {items.alt_one_price_two} <span> EUR</span>{" "}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <ScrollToTop />
    </>
  );
};

export default Mittagessen;
