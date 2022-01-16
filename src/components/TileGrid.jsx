import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MyTile from "../components/myTile";
import skills from "../data/skills.json";

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
    let title = "";
    skills.forEach((element) => {
      if (element.cardId === this.state.cardId) {
        console.log(element.title.toString());
        title = element.title.toString();
      }
    });
    return title;
  }

  cardText() {
    let cardText1 = "";
    let cardText2 = "";
    skills.forEach((element) => {
      if (element.cardId === this.state.cardId) {
        cardText1 = element.para1;
        cardText2 = element.para2;
      }
    });
    return (
      <div>
        {cardText1}
        <br></br>
        <br />
        {cardText2}
      </div>
    );
  }

  handleClick(info) {
    if (info.target.alt !== this.state.cardId)
      this.setState({ cardId: info.target.alt });
    this.cardTitle();
    this.cardText();
  }

  componentDidUpdate(prevState) {
    if (prevState.cardId !== this.state.cardId) {
      console.log("rendering!");
      this.render();
    }
  }

  render() {
    return (
      <div className="skills">
        <Grid
          className="tilegrid"
          container
          direction="row"
          sx={{ maxWidth: "80%" }}
          columnSpacing={1}
          rowSpacing={3}
          justifyContent="center"
          alignContent="center"
          display="flex"
          marginRight="auto"
          marginLeft="auto"
        >
          <Grid item xs={12}>
            <Card
              elevation={8}
              style={{
                backgroundColor: "rgba(0, 0, 0, .9)",
                width: "80vw",
                height: "20vh",
                alignContent: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: "1.8vw" }}
                  color="#fff"
                  gutterBottom
                >
                  {this.cardTitle()}
                </Typography>
                <Typography variant="body1 " color="rgba(255, 255, 255, .8)">
                  {this.cardText()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/python.png")}
              altText="Python"
              clickHandler={this.handleClick}
            />
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/java.png")}
              altText="Java"
              clickHandler={this.handleClick}
            />
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/bash.png")}
              altText="Bash"
              clickHandler={this.handleClick}
            />
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/react-javascript.png")}
              altText="ReactJS"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/tf.png")}
              altText="Tensorflow"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/sql.png")}
              altText="SQL"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/api.png")}
              altText="API"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/javascript.png")}
              altText="Javascript"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/lms.png")}
              altText="LMS"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/ld.png")}
              altText="LandD"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/da.png")}
              altText="DataAnalytics"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/gcp.png")}
              altText="GCP"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/camtasia.png")}
              altText="Camtasia"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/project.png")}
              altText="Project Management"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/google.png")}
              altText="Google"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/osx.png")}
              altText="OSX"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/windows.png")}
              altText="Windows"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TileGrid;
