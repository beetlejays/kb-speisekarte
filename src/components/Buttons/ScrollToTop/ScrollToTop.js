import React from "react";
import { Link, animateScroll as scroll } from "react-scroll"
import "./ScrollToTop.css"

const ScrollToTop = () => {
    return(
        <>
            <footer>
            
            <Link className="footer__content" to="root" spy={true} smooth={true} offset={50} duration={500} > &raquo;Zurück nach oben</Link>
         
            </footer>
        </>
    )
}

export default ScrollToTop