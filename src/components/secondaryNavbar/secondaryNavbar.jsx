import "../../App.css";
import "./secondaryNavbar.css";
import { IconButton, Tooltip } from "@mui/material";
import { Phone, Devices, House } from "@phosphor-icons/react";

function SecondaryNavbar() {
  return (
    <>
      <div className="secondary_navbar_container">
        <div className="secondary_navbar_logo">
          <p>Bruno Novais</p>
        </div>

        <div className="secondary_navbar_links">
        <Tooltip title="Início">
            <IconButton href="#" color="black">
              <House weight="fill" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Projetos">
            <IconButton href="#" color="black">
              <Devices weight="fill" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Entre em Contato">
            <IconButton href="#" color="black">
              <Phone weight="fill" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default SecondaryNavbar;
