import React from "react"
import '../global.css'

const AboutUs = () => {
    return (
        <section className="container-fluid text-center mt-1" id='about-us'>
            <h2><b>About Us</b></h2>
            <p> 
            Founded by an experienced IT professional specializing in hardware repair and systems administration, we operate from a home-based workshop, 
            ensuring personalized attention and swift solutions for your technology needs. 
            Our commitment to quality is reflected in our use of premium parts and effective repair methods, ensuring your devices perform optimally. 
            As a local business, we prioritize building lasting relationships through transparent service and competitive pricing. 
            Trust <span className="text-green"><b>Z-FIX</b></span> for reliable, professional tech repairs.
            </p>
        </section>
    )
}

export default AboutUs