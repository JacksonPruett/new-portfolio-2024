import "./WorkCardStyles.css";
import pro1 from "../assets/project1.jpg";

import React from "react";
import WorkCard from "./WorkCard";
import WordCardData from "./WorkCardData"

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WordCardData.map((value, index) => {
            return (
                <WorkCard 
                key={index} 
                imgsrc={value.imgsrc} 
                title={value.title}
                text={value.text}
                view={value.view}
                source={value.source}
                />
            )
        })}
      </div>
    </div>
  );
};

export default Work;
