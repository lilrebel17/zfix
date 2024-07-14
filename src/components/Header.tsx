import React from "react";
import '../global.css'
const Header = () => {
    return(
        <div className="container-fluid mb-0 text-center fs-6 mb-1 p-0">
            <div className="text-center bg-green text-white m-0 p-0">
                <span>Proudly Serving Upstate South Carolina!</span>
                <br/>
                <span><b>Call now!</b></span>
                <a href="tel:8644040591" className="text-white">
                    <p className="pb-1 mb-1"><b>864.404.0591</b></p>
                </a>
            </div>
            <img src='./resources/ZFix Logo.png' alt="Z-FIX Logo" className="img-fluid"></img>
        </div>
    )
}

export default Header