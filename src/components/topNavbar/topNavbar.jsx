import "../../App.css";
import "./topNavbar.css";
import { IconButton, Tooltip } from "@mui/material";
import { Phone, UserList, Devices } from "@phosphor-icons/react";

function TopNavbar() {
  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <p>Bruno Novais</p>
        </div>

        <div className="links">
          <Tooltip title="Sobre Mim">
            <IconButton href="#about" color="white">
              <UserList weight="fill" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Projetos">
            <IconButton href="#projects" color="white">
              <Devices weight="fill" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Entre em Contato">
            <IconButton href="#" color="white">
              <Phone weight="fill" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
