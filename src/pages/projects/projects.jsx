import { useRef, useEffect, useState } from "react";
import "./projects.css";
import { CaretDown } from "@phosphor-icons/react";
import { Chip, Box, IconButton, Tooltip, Grid } from "@mui/material";
import Menu from "../../components/menu/menu";
import ProjectCard from "../../components/projectCard/projectCard";

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
              label="Desenvolvedor"
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
          <Box sx={{ height: "100vh"}}>
            {selectedTab === "programador" && (
              <Box>
              <div className="tab_header">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              </div>
                {/* <Menu /> */}

                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <ProjectCard
                      // imagePath="../../../public/assets/img/bg1.jpg"
                      title="Title"
                      text="Descrição"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <ProjectCard
                      // imagePath="../../../public/assets/img/bg1.jpg"
                      title="Title"
                      text="Descrição"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <ProjectCard
                      // imagePath="../../../public/assets/img/bg1.jpg"
                      title="Title"
                      text="Descrição"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <ProjectCard
                      // imagePath="../../../public/assets/img/bg1.jpg"
                      title="Title"
                      text="Descrição"
                    />
                  </Grid>
                </Grid>
              </Box>
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
