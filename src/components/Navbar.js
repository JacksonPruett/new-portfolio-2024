import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from "react-icons/fa";
 

const Navbar = () => {
    // state function to handle hamburger toggle
    const [barsToggle, setBarsToggle] = useState(false)
    const handleClick = () => setBarsToggle(!barsToggle)

  return (
    <div className='header'>
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