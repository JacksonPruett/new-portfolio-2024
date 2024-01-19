import { Link } from "react-router-dom";
import "./AboutContentstyles.css";
import React1 from "../assets/react1.jpg";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Hello there,</h1>
        <p>
          Hello, I'm Jackson—a former Marine with six years of service, now
          transitioning into full-stack web development through LEARN Academy.
          My military background involved establishing radio connections and
          maintaining communication equipment for diverse units across the US.
        </p>
        <br/>
        <p>
          In my civilian life, I honed fabrication welding skills, contributing
          to projects like crafting exhaust systems for NASCAR and building
          tanks for respirator manufacturing during the pandemic. Since leaving
          the Marine Corps in 2023, I've been immersing myself in full-stack web
          development at LEARN Academy, exploring technologies like Javascript,
          React, Ruby, and Ruby on Rails. Eager to showcase evolving
          capabilities, I welcome collaborations and opportunities. 
          </p>
          <br/>
          <p>
          Feel free to
          reach out for questions, ideas, or just to connect. Let's explore how
          our paths may intersect.
          </p>
          <br/>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
        </div>
  );
};

export default AboutContent;
