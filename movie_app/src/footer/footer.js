import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div>
            <footer className="footer bg-dark text-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>About Us</h3>
                            <p>
                                Welcome to the Movie Management System, your go-to platform for managing and discovering the latest movies.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3>Connect with Us</h3>
                            <div className="social-icons">
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Contact Information</h3>
                            <p>
                                Email: info@moviemanagement.com<br />
                                Phone: +123-456-7890
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="divider" />
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <p>&copy; {new Date().getFullYear()} Movie Management System. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer