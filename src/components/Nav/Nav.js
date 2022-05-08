import React from "react";
import { Link } from "react-router-dom";
import Navitem from "../Navitem/Navitem";
import Logo from "../Logo/Logo";

const Nav = () => {
  return (
    <>
      <div className="container__main center">
        <Logo />
      </div>

      <nav className="container">
        <Link to="/Fruehstueck">
          {" "}
          <Navitem name="Frühstück" />
        </Link>
        <Link to="/DoItYourself">
          {" "}
          <Navitem name="Do it yourself" />
        </Link>
        <Link to="/Mittagessen">
          {" "}
          <Navitem name="Mittagessen" />
        </Link>
        <Link to="/Heissgetraenke">
          {" "}
          <Navitem name="Heissgetränke" />
        </Link>
        <Link to="/Getraenke">
          {" "}
          <Navitem name="Getränke" />
        </Link>
        <Link to="/Saefte">
          {" "}
          <Navitem name="Säfte/Smoothies" />
        </Link>
        <Link to="/Kuchen">
          {" "}
          <Navitem name="Kuchen" />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
