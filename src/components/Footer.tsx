import '../global.css'

const Footer = () => {
    return (
        <footer className="footer bg-green text-white pt-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-telephone"></i> 864.372.9283
                            </li>
                            <li>
                                <i className="bi bi-envelope"></i><span> </span>
                                <a href="mailto:zfarmer@zfixsc.us" className='text-white link-fa'>zfarmer@zfixsc.us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col text-end">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="#home" className='text-white'>Home</a></li>
                            <li><a href="#about-us" className='text-white'>About Us</a></li>
                        </ul>
                    </div>
                </div>
                <hr className='mt-0'/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2024 Z-Fix. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer