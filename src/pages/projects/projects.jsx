import { useRef, useEffect, useState } from "react";
import "./projects.css";
import { CaretDown } from "@phosphor-icons/react";
import { Chip, Box, IconButton, Tooltip, Grid } from "@mui/material";
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
          <Box sx={{ height: "100vh" }}>
            {selectedTab === "programador" && (
              <Box >
                {/* <Menu /> */}
                
                <Grid container spacing={2}>
                  <Grid xs={8}>
                  <div className="card_grid">teste</div>
                  </Grid>
                  <Grid xs={4}>
                  <div className="card_grid">teste</div>
                  </Grid>
                  <Grid xs={4}>
                  <div className="card_grid">teste</div>
                  </Grid>
                  <Grid xs={8}>
                  <div className="card_grid">teste</div>
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
