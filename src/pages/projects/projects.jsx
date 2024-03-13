import { useRef, useEffect, useState } from "react";
import "./projects.css";
import { CaretDown } from "@phosphor-icons/react";
import { Chip, Box, IconButton, Tooltip } from "@mui/material";
import Menu from "../../components/menu/menu";

function Projects() {
  const [selectedTab, setSelectedTab] = useState("programador");

  const handleChipClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="page projects" id="projects">
        <div className="projects_container">
          <div className="projects_header">
            <Chip
              variant={selectedTab === "programador" ? "contained" : "outlined"}
              label="Programador"
              clickable
              color={selectedTab === "programador" ? "primary" : "default"}
              onClick={() => handleChipClick("programador")}
            />
            <Chip
              variant={selectedTab === "designer" ? "contained" : "outlined"}
              label="Designer"
              clickable
              color={selectedTab === "designer" ? "primary" : "default"}
              onClick={() => handleChipClick("designer")}
            />
          </div>
          <Box sx={{ height: "100vh" }}>
            {selectedTab === "programador" && (
              <div className="projects_content">
                <Menu />

                <div className="project_card">
                  <div className="card_image"></div>
                  <div className="card_content">
                    <span>text</span>
                  </div>
                </div>
              </div>
            )}
            {selectedTab === "designer" && (
              <div className="projects_content">
                <span>designer</span>
              </div>
            )}
          </Box>
        </div>
      </div>
    </>
  );
}

export default Projects;
