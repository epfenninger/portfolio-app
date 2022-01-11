import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import React, { Component } from "react";
import { Button, CardActionArea, CardActions } from "@mui/material";

class MyExperience extends React.Component {
  constructor(props) {
    super(props);
    this.cardMouseLeave = this.cardMouseLeave.bind(this);
    this.cardMouseEnter = this.cardMouseEnter.bind(this);
    this.hoverColor = this.hoverColor.bind(this);

    this.state = {
      title: "Default",
      description: "Default",
      year: 1993,
      mainColor: "rgba(0, 0, 0, 0)",
      altColor: "rgba(0, 0, 0, .7)",
      elevation: 8,
      mouseOver: false,
      tileHeight: "350",
    };
  }

  cardMouseEnter() {
    this.setState({ mouseOver: true });
    this.render();
  }

  cardMouseLeave() {
    this.setState({ mouseOver: false });
    this.render();
  }

  hoverColor() {
    if (this.state.mouseOver) return this.state.altColor;

    return this.state.mainColor;
  }

  render() {
    return (
      <div>
        <Card
          style={{
            backgroundColor: this.hoverColor(),
            height: this.tileHeight,
            border: "none",
            boxShadow: "none",
          }}
        >
          <CardActionArea
            onMouseEnter={this.cardMouseEnter}
            onMouseLeave={this.cardMouseLeave}
            onClick={this.props.clickHandler}
          >
            <CardMedia
              style={{
                objectFit: "scale-down",
                height: "10vh",
                width: "10vw",
                margin: "auto",
              }}
              component="img"
              height={this.state.tileHeight}
              image={this.state.img}
              alt={this.state.alt}
            />
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default MyExperience;
