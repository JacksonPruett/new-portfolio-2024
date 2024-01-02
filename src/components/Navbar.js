import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from "react-icons/fa";
 

const Navbar = () => {
    // state function to handle hamburger toggle
    const [barsToggle, setBarsToggle] = useState(false)
    const handleClick = () => setBarsToggle(!barsToggle)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        // window.scrollY: This represents the current vertical scroll position of the window. It gives the number of pixels the document is currently scrolled vertically from the top. setColor will trigger when the vertical scroll position is 100px or more.
        if(window.scrollY >= 1){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

  return (
    <div className={color ?  'header header-bg' : 'header'}>
        <Link to='/'>
            {/* this is my branding on the left side */}
            <h1>JPruett</h1>
        </Link>
        {/* this is the actual navbar on the website */}
        {/* the if/else statement controls which CSS properties are being accessed based on whether or not the hamburger menu is toggled */}
        <ul className={barsToggle ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/project'>Project</Link>
            </li>
            <li>
                <Link to='/About'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
            {/* this is for the bars or 'hamburger' menu toggler on smaller devices */}
            {/* if clicked, show FaTimes (X) otherwise show FaBars (hamburger menu) */}
            <div className='hamburger' onClick={handleClick}>
                {barsToggle ? (
                    <FaTimes size={20} style={{ color: "#fff"}} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff"}} />
                )}
            </div>
    </div>
  )
}

export default Navbar