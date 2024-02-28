import "../../App.css";
import "./top-navbar.css";
import { IconButton } from '@mui/material';
import { Phone, UserList, Devices } from "@phosphor-icons/react";


function TopNavbar() {
  return (
    <>
      <div className="navbar_container">

        <div className="logo">
          <p>Bruno Novais</p>
        </div>

        <div className="links">
          <IconButton href="#about" color="white">
            <UserList weight="fill" />
          </IconButton>

          <IconButton href="#" color="white">
            <Devices weight="fill" />
          </IconButton>

          <IconButton href="#" color="white">
            <Phone weight="fill" />
          </IconButton>
        </div>

      </div>
    </>
  );
}

export default TopNavbar;
