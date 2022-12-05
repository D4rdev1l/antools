import React from 'react'
import './footer.scss'

import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className="footer section__padding">
            <div className="footer-links">
                <div className="footer-links_logo">
                    <img src={logo} alt="" />
                    <p>Copyright 2021. Antools</p>
                    <p>Antool is a web collection of information on paid or free Design and Development tools</p>
                </div>
                <div className="footer-links_div">
                    <h4>Contact Us</h4>
                    <p><a href="">+621987463</a></p>
                    <p>M Building, No.10 A</p>
                    <p>antools@awesome.com</p>
                </div>
                <div className="footer-links_div">
                    <h4>Categories</h4>
                    <p>Design</p>
                    <p>Development</p>
                </div>
                <div className="footer-links_div">
                    <h4>Company Info</h4>
                    <p>About Us</p>
                    <p>Our Partners</p>
                    <p>Blog</p>
                </div>
            </div>

        </div>
    )
}

export default Footer