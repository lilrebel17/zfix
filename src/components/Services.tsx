import '../global.css'

const Services = () => {
    return (
        <section className="container-fluid text-center fs-6 bg-soft-gray pt-3" id='services'>
            <h2 className="h2"><b>What do we do?</b></h2>
            <section>
                <h3 className="h3"><b>Computer Repair</b></h3>
                <p>
                    Our computer repair services cater to both home users and small businesses. 
                    Whether you need upgrades, hardware replacements, or troubleshooting for performance issues, 
                    we provide reliable solutions tailored to meet your specific needs. Trust us to keep your desktop computers running smoothly.
                </p>
            </section>
            <section>
                <h3 className='h3'><b>Phone Repair</b></h3>
                <p>
                    We offer expert phone repair services for most major brands and models. 
                    From cracked screens to battery replacements and software troubleshooting, 
                    we are equipped to handle various phone issues swiftly. 
                    Count on us to restore your phone to its optimal condition.
                </p>
            </section>
            <section>
                <h3 className='h3'><b>Device Optimization</b></h3>
                <p>
                Beyond repairs, we offer expert advice on optimizing your devices for better performance and longevity. 
                From recommending hardware upgrades to optimizing software settings, our goal is to enhance your overall technology experience.
                </p>
            </section>
        </section>
    )
}

export default Services