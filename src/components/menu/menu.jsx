import "./menu.css";
import { useState } from "react";
import { IconButton, Button } from "@mui/material";
import { Brain, SquaresFour, House, Star } from "@phosphor-icons/react";

const Menu = () => {
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  const toggleMenuOptions = () => {
    setShowMenuOptions(!showMenuOptions);
  };

  return (
    <>
      <div className="menu_container">
        <div className="menu">
          <div className="menu_content">
            <div className="logo_section">
              <IconButton color="icon">
                <Brain />
              </IconButton>
            </div>
            <div className="main_icons_section">
              <IconButton color="icon" onClick={toggleMenuOptions}>
                <SquaresFour />
              </IconButton>
              <IconButton color="icon">
                <House />
              </IconButton>
            </div>
            <div className="extra_icons_section">
              <IconButton color="icon">
                <Star />
              </IconButton>
            </div>
            <div className="config_icons_section"></div>
          </div>
        </div>
      </div>
      {showMenuOptions && (
        <div className="options_section">
          <div className="menu_option">
            <IconButton color="icon">
              <Star />
            </IconButton>
            <span>Teste</span>
          </div>
          <div className="menu_option">
            <IconButton color="icon">
              <SquaresFour />
            </IconButton>
            <span>Teste</span>
          </div>
          <div className="menu_option">
            <IconButton color="icon">
              <House />
            </IconButton>
            <span>Teste</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
