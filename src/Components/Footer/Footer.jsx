import React from 'react'
import "./style.css"
import uxaddalogo from "./uxadda-light.svg"
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
            <section id='footer'>
                <div className="container">
                    <div className="footermain">
                        <div className="ftrlogo">
                            <img src={uxaddalogo} alt="UXAdda Logo" />
                        </div>
                        <div className="ftrcompany">
                            <h4>Company</h4>
                            <ul>
                                <li><Link>Contact</Link></li>
                                <li><Link>Our Staff</Link></li>
                                <li><Link>Advertise</Link></li>
                            </ul>
                        </div>
                        <div className="ftrcategories">
                            <h4>Categories</h4>
                            <ul>
                                <li><Link>Design</Link></li>
                                <li><Link>Development</Link></li>
                                <li><Link>App</Link></li>
                            </ul>
                        </div>
                        <div className="ftrcontactus">
                            <h4>Contact Us</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section id='copyright'>
                <div className="container">
                    <div className="cpymain">
                        <div className="cpyrgt">
                            <span>Copyright © 2024 UX Adda.</span>
                        </div>
                        <div className="cpylogo">
                            <Link> <FaLinkedin /></Link>
                            <Link><FaFacebook /></Link>
                            <Link><FaXTwitter /></Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
