import React from "react";
import "./about.css";
import SecondaryNavbar from "../../components/secondaryNavbar/secondaryNavbar";
import CustomButton from "../../components/customButton/customButton";
import { Box, IconButton, Tooltip, Divider, Tab, Tabs } from "@mui/material";
import {
  Phone,
  Devices,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  CaretDown,
  Dot,
} from "@phosphor-icons/react";

function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="page about" id="about">
        <Box className="content_container">
          <div className="about_section">
            <div className="about_header">
              <SecondaryNavbar />
            </div>

            <div className="about_content">
              <div className="about_content_tilte">
                <h2>Bruno Novais</h2>
              </div>
              <div className="about_content_text">
                <h3 className="color">Desenvolvedor Web & Designer</h3>
                <span>
                  Desenvolvedor experiente em projetos de sites, aplicativos web
                  e mobile, com habilidades em UI/UX Design, incluindo edição e
                  manipulação de imagem, vídeo, animações e modelagem 3D, entre
                  outras tarefas de design.
                </span>
              </div>
              <div className="about_content_text_topic">
                <div className="tabs_container">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab className="teste" label="Educação" />
                    <Tab className="teste" label="Experiências" />
                  </Tabs>
                </div>
                <div className="topic_content">
                  {value === 0 && (
                    <>
                      <div className="topic_option">
                        <h4>Universidade Senac EAD</h4>
                        <span>
                          Análise e Desenvolvimento de Sistemas | 2021 - 2023
                        </span>
                      </div>
                      <div className="topic_option">
                        <h4>Senac, Guaratinguetá-SP</h4>
                        <span>Técnico em Computação Gráfica | 2017 - 2018</span>
                      </div>
                    </>
                  )}
                  {value === 1 && (
                    <>
                      <div className="topic_option">
                        <h4>Empresa XYZ</h4>
                        <span>Desenvolvedor Full Stack | 2020 - Presente</span>
                      </div>
                      <div className="topic_option">
                        <h4>Empresa XYZ</h4>
                        <span>Desenvolvedor Full Stack | 2020 - Presente</span>
                      </div>
                      <div className="topic_option">
                        <h4>Empresa XYZ</h4>
                        <span>Desenvolvedor Full Stack | 2020 - Presente</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="about_actions">
              <CustomButton href="#home" />
            </div>
          </div>

          <div className="photo_section">
            <div className="photo_section_actions">
              <Tooltip title="Linkedin" placement="top">
                <IconButton
                  variant="contained"
                  href="https://www.linkedin.com/in/bruno-novais-381975191/"
                  target="_blank"
                  color="black"
                >
                  <LinkedinLogo weight="fill" />
                </IconButton>
              </Tooltip>

              <Tooltip title="GitHub" placement="top">
                <IconButton
                  variant="contained"
                  href="https://github.com/bruno-novais"
                  target="_blank"
                  color="black"
                >
                  <GithubLogo weight="fill" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Instagram" placement="top">
                <IconButton
                  variant="contained"
                  href="#"
                  target="_blank"
                  color="black"
                >
                  <InstagramLogo weight="fill" />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          <div className="skill_section">
            <h2>Habilidades</h2>

            <div className="skill_topic_container">
              <Dot weight="duotone" size={64} />
              <div className="skill_topic">
                <div className="topic_header">
                  <h4>Programação</h4>
                </div>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>React Native</li>
                <li>PHP</li>
                <li>SQL</li>
              </div>
            </div>

            <div className="skill_topic_container">
              <Dot weight="duotone" size={64} />
              <div className="skill_topic">
                <div className="topic_header">
                  <h4>Design</h4>
                </div>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe After Effects</li>
                <li>Adobe Premiere Pro</li>
                <li>Autodesk 3ds Max</li>
                <li>Autodesk Autocad</li>
                <li>ZBrush</li>
                <li>Figma</li>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default About;
