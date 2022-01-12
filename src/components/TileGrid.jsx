import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
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
    if (this.state.cardId === "About Me")
      return "About me description! asdfasdfasd;fjasd;lf lasdfjl asdkflja;sdlfj ;alsdfj ;alsdfj ;lasdfj ;lasjf ;lasjf ;lasjf;lasdjf;lkasjdf ;lasdf ;lasdjf ;lkasdjf l;asdjf ;lasdjf asdjflaksdjf ;lasdjf l;asdfj l;as dfj;lasd fja;lfkj ad;fjadf' j cvjklv;kfjadsjk;l asdj ;lafdsjkl; asdf;ljkads f ;ljaclvnlax;cnva;lsknfa;lsdkfh asdlfj asd;lfja;sdlfj";
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
                backgroundColor: "rgba(0, 0, 0, .7)",
                width: "80vw",
                height: "20vh",
                alignContent: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
                  {this.cardTitle()}
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, .8)">
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
              altText="React-Javascript"
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
              altText="Learning and Development"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/da.png")}
              altText="Data Analytics"
              clickHandler={this.handleClick}
            ></MyTile>
          </Grid>
          <Grid item xs={2}>
            <MyTile
              img={require("../images/gcp.png")}
              altText="Google Cloud Platform"
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
