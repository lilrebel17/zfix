import React from "react";
import '../global.css'
const Header = () => {
    return(
        <div className="container-fluid mb-0 text-center fs-6 mb-1 p-0">
            <div className="text-center bg-green text-white m-0 pb-2">
                <span>Proudly Serving Upstate South Carolina!</span>
                <br/>
                <a href="sms:8643729283" className="link-light"><b>Text Anytime</b></a>
            </div>
            <img src='./resources/ZFix Logo.png' alt="Z-FIX Logo" className="img-fluid" style={{height: "15rem"}}></img>
        </div>
    )
}

export default Header