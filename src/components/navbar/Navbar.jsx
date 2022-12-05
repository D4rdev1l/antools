import React, {useState} from 'react'
import './navbar.scss'

import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from '../../assets/logo.svg'

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#" className="navbar-links_dropdownLink">
            <span>Categories</span>
            <RiArrowDropDownLine className="navbar-links_dropdownLinkIcon"/>
        </a></p>
        <p><a href="#">My Collection</a></p>
        <p><a href="#">Blog</a></p>
    </>
)
const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="logo" />
        </div>
        {/* .navbar-logo */}
        <div className="navbar-links">
            <Menu />
        </div>
        {/* .navbar-links */}
        <div className="navbar-sign">
            <p>Login</p>
            <button type="button">Sign up</button>
        </div>
        {/* .navbar-sign */}
        <div className="navbar-menu">
            {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className="navbar-menu_container scale-up-center">
                    <div className="navbar-menu_container-links">
                        <Menu />
                        <div className="navbar-menu_container-links_sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                        {/* .navbar-menu_container-links__sign */}
                    </div>
                    {/* .navbar-menu_container-links */}
                </div>
                // .navbar-menu_container
            )}
        </div>
        {/* .navbar-menu */}
    </div>
    // .navbar
  )
}

export default Navbar