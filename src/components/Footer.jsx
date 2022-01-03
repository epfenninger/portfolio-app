import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/Card";

const footerStyle = {
  backgroundColor: "rgba(0, 0, 0, .5)",
  height: "3vw",
  maxHeight: "300px",
  align: "center",
};

const textStyle = {
  color: "white",
  marginLeft: "10vw",
};

const imageStyle = {
  height: "10px",
  width: "10px",
};

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          right: "0",
          maxHeight: "30px",
        }}
      >
        <Card style={footerStyle}>
          <h5 style={textStyle}>Built by Ethan Pfenninger</h5>
          <CardMedia
            href="linkedin.com/in/ethan-pfenninger-84437889"
            component="img"
            height="10px"
            image={require("../images/linkedin.png")}
          />
        </Card>
      </div>
    );
  }
}

export default Footer;
