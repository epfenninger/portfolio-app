import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MyTile from "../components/myTile";

class TileGrid extends React.Component {
  constructor(props) {
    super(props);
    this.Cardtitle = this.cardTitle.bind(this);
    this.cardText = this.cardText.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      cardId: "About Me",
    };
  }

  cardTitle() {
    if (this.state.cardId === "About Me") return "About Me";
    if (this.state.cardId === "Python") return "Python Experience";
    if (this.state.cardId === "Java") return "Java";
    if (this.state.cardId === "About Me") return "About Me";
    if (this.state.cardId === "About Me") return "About Me";

    return "Not About me";
  }

  cardText() {
    if (this.state.cardId === "About Me") return "About me description!";
    if (this.state.cardId === "Python") return "Python Experience";
    if (this.state.cardId === "Java") return "Java";
    if (this.state.cardId === "About Me") return "About Me";
    if (this.state.cardId === "About Me") return "About Me";
  }

  handleClick(info) {
    if (info.target.alt !== this.state.cardId)
      this.setState({ cardId: info.target.alt });
    this.render();
  }

  render() {
    return (
      <div style={{ marginLeft: "auto" }}>
        <Divider />
        <Card elevation={8} style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
              {this.cardTitle()}
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, .8)">
              {this.cardText()}
            </Typography>
          </CardContent>
        </Card>
        <Divider />
        <Grid
          container
          rowSpacing={1}
          sx={{ maxWidth: 1800 }}
          columnSpacing={0.5}
          justifyContent="center"
          alignContent="center"
          display="flex"
          style={{ minHeight: "10vh", minWidth: "50vh", ml: "auto" }}
          marginLeft="auto"
          marginRight="auto"
        >
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/me.jpg")}
              altText="About Me"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/python.png")}
              altText="Python"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/java.png")}
              altText="Java"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/bash.png")}
              altText="Bash"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/react-javascript.png")}
              altText="React-Javascript"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/tf.png")}
              altText="Tensorflow"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/addie.png")}
              altText="Addie"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/ld.png")}
              altText="Learning and Development"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/api.png")}
              altText="API"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/camtasia.png")}
              altText="Camtasia"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/google.png")}
              altText="Google"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/lms.png")}
              altText="LMS"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/da.png")}
              altText="Data Analytics"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/gcp.png")}
              altText="Google Cloud Platform"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/microsoft.png")}
              altText="Windows"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/project.png")}
              altText="Project Management"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/osx.png")}
              altText="OSX"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/sql.png")}
              altText="SQL"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/windows.png")}
              altText="Windows"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={1.5}>
            <MyTile
              img={require("../images/javascript.png")}
              altText="Javascript"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TileGrid;
