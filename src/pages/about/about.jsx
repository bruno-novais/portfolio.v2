import "./about.css";
import { Paper, Box, Button } from "@mui/material";

function About() {
  return (
    <>
      <div className="page about" id="about">
        <Box className="content_container">
          <div className="about_section">
            <div className="about_header">
              <span>navbar</span>
            </div>

            <div className="about_content">
              <div className="about_content_tilte">about</div>
              <div className="about_content_text">text about</div>
            </div>

            <div className="about_actions">
              <Button variant="contained">Teste</Button>
            </div>
          </div>

          <Paper className="photo_section" elevation={3}></Paper>
          <Paper className="skill_section" elevation={3}></Paper>
        </Box>
      </div>
    </>
  );
}

export default About;
