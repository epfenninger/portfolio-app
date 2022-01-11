import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1, height: "8vh" }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              color="white"
              fontSize="1.3vw"
            >
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  justifyContent: "center",
                }}
              >
                <li>
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="tilegrid" spy={true} smooth={true}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="experience" spy={true} smooth={true}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" spy={true} smooth={true}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true}>
                    Contact
                  </Link>
                </li>
              </ul>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NavBar;
