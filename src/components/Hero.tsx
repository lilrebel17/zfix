import '../global.css'

const Hero = () => {
    return (
        <div className="container-fluid bg-soft-gray text-center p-3">
            <h4 className="h4"><b>Expert Repairs, Exceptional Service: Your Trusted Technology Partner in South Carolina</b></h4>
            <p className="fs-6">
                Welcome to <span className="text-green"><b>Z-FIX</b></span>, your premier destination for expert computer, phone, 
                and desktop repair services in upstate South Carolina. Founded and operated by a dedicated IT professional with extensive experience in 
                system administration and hardware repair. We specialize in fast, reliable solutions from our home-based workshop. 
                Whether you're dealing with hardware malfunctions, software issues, or need device optimization advice, 
                our knowledgeable team ensures your technology works seamlessly. Contact us today for expert tech repairs.
            </p>
            <a href='tel:8643729283'>
                <button type='button' className='btn btn-lg btn-success'>Call Now</button>
            </a>
        </div>
    )
}

export default Hero