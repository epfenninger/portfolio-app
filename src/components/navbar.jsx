import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  variant: "outlined",
};

class NavBar extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
              <Link to="/experience" style={linkStyle}>
                Experience
              </Link>
              <Link to="/portfolio" style={linkStyle}>
                Portfolio
              </Link>
              <Link to="/resume" style={linkStyle}>
                Resume
              </Link>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NavBar;
