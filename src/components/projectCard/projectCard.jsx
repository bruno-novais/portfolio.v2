import React from "react";
import "./projectCard.css";
import { IconButton, Button } from "@mui/material";
import { Brain, SquaresFour, House, Star } from "@phosphor-icons/react";

const ProjectCard = ({ imagePath, title, text }) => {
  return (
    <>
      <div className="card_container">
        <div className="card_image">
          <img src={imagePath} alt={title} />
        </div>
        <div className="card_description">
          <h3>{title}</h3>
          <span>{text}</span>
        </div>
        {/* <Button variant="contained" color="components">Button</Button> */}
      </div>
    </>
  );
};

export default ProjectCard;
