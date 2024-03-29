import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/altumcode-XMFZqrGyV-Q-unsplash.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Photo by ian dooley on Unsplash. Image of coffee, notebook, pens, and computer neatly organized on desk"/>
        </div>
        <div className="content">
            <p>Hi, I'm Jackson.</p>
            <br/>
            <p><strong style={{color: "#61DBFB"}}>React</strong> / <strong style={{color: "#cc0000"}}>Rails</strong></p>
            <h1>Full-Stack Web Developer</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg