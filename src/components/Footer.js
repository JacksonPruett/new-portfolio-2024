import "./Footerstyles.css";
import resume from "../assets/Jackson_Pruett_resume.pdf"
import React from "react";

import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* 'left' as in left side of the footer  */}
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>North Carolina</p>
            </div>
          </div>
          <div className="resume">
              <a href={resume} target="_blank" rel="noopener">
            <h4>
              <IoDocumentTextOutline
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Résumé
            </h4>
            </a>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jacksonc.pruett@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>My name is Jackson Pruett and I am a front-end web developer from North Carolina. I enjoy discussing new projects and working through design challenges.</p>
            <div className="social">
              <a href="https://github.com/JacksonPruett" target="_blank" rel="noopener">
              <FaGithub href='https://github.com/JacksonPruett'
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
              <a href="https://www.linkedin.com/in/jacksoncpruett/" target="_blank" rel="noopener">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
              <a href="https://medium.com/@jacksonc.pruett" target="_blank" rel="noopener">
              <FaMedium
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
