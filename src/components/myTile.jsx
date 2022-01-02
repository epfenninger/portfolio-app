import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import { Button, CardActionArea, CardActions } from "@mui/material";

class MyTile extends React.Component {
  constructor(props) {
    super(props);
    this.cardMouseLeave = this.cardMouseLeave.bind(this);
    this.cardMouseEnter = this.cardMouseEnter.bind(this);
    this.hoverColor = this.hoverColor.bind(this);

    this.state = {
      img: this.props.img,
      mainColor: "rgba(0, 0, 0, .8)",
      altColor: "rgba(0, 0, 0, 0)",
      elevation: 8,
      alt: this.props.altText,
      mouseOver: false,
      tileHeight: "180",
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
          sx={{ maxWidth: 200 }}
          elevation={8}
          style={{ backgroundColor: this.hoverColor() }}
        >
          <CardActionArea
            onMouseEnter={this.cardMouseEnter}
            onMouseLeave={this.cardMouseLeave}
            onClick={this.props.clickHandler}
          >
            <CardMedia
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

export default MyTile;
