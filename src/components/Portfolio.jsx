import * as React from "react";
import PortfolioCard from "./PortfolioCard";
import { Grid, Card, CardActionArea, CardMedia } from "@mui/material";

class Portfolio extends React.Component {
  state = {};
  render() {
    return (
      <Grid
        className="portfolio"
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
        bottom="00vh"
        position="relative"
      >
        <Grid item xs={12}>
          <h1
            style={{
              marginLeft: "auto",
              justifyContent: "center",
              display: "flex",
              fontSize: "2.5em",
            }}
          >
            Portfolio
          </h1>
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Risk Assessment when Winter Hiking in the White Mountains"
            skills="Captivate, L&D"
            imgSrc={require("../images/riskassessment.jpg")}
            content={<img src={require("../images/tensorflow_lite.png")} />}
            textColor={"#FFFFFF"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Comparing SCORM and xAPI"
            skills="L&D, API, Camtasia"
            imgSrc={require("../images/scormxapi.png")}
            content={<img src={require("../images/tensorflow_lite.png")} />}
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Integrating Tensorflow Object detection via API"
            skills="API, ML, Python"
            imgSrc={require("../images/tensorflow_lite.png")}
            content=""
            textColor={"black"}
            imgFit={"scale-down"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Integrating personalized domains with Google Sites"
            skills="Camtasia, L&D, Microlearning"
            imgSrc={require("../images/googledomain.png")}
            imgFit={"scale-down"}
            content="Very short video I put out for the L&D community on how to use Google Domains to personalize the url of their Google Site"
            iFrameWidth={"800"}
            iFrameHeight={"560"}
            iFrameVideo={"https://www.youtube.com/embed/ZSS0ztftHpg"}
            iFrameAllow={
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            }
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Running Data Analysis utilizing an undocumented API"
            skills="API, Data Analysis, Python"
            imgSrc={require("../images/DataAnalysis.jpg")}
            content={<img src={require("../images/tensorflow_lite.png")} />}
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Reverse Engineering undocumented modbus platform"
            skills="API, Data Analysis, Python"
            imgSrc={require("../images/modbus.png")}
            content={<img src={require("../images/modbus.png")} />}
            textColor={"black"}
            imgFit={"scale-down"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Systems Integration for Smart-Van Build"
            skills="Python, API, Data Analytics, Camtasia"
            imgSrc={""}
            content={<img src={require("../images/tensorflow_lite.png")} />}
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Van Build!"
            skills="Fun"
            imgSrc={require("../images/van.jpg")}
            content={<img src={require("../images/tensorflow_lite.png")} />}
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Managing G-Suite via GAM and Google AppScript"
            skills="Javascript, Systems Admin"
            imgSrc={require("../images/gsuite.jpg")}
            content={<img src={require("../images/tensorflow_lite.png")} />}
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <a href="https://github.com/epfenninger/portfolio-app">
            <Card>
              <CardActionArea>
                <h2
                  style={{
                    position: "absolute",
                    color: "white",
                    top: "0vh",
                    textShadow: "1px black",
                    marginLeft: "1vw",
                    fontSize: "1em",
                  }}
                >
                  ReactJS, Javascript, Web Design
                </h2>
                <CardMedia
                  style={{
                    objectFit: "",
                    height: "20vh",
                    width: "100%",
                    margin: "auto",
                  }}
                  component="img"
                  image={require("../images/website.png")}
                  alt=""
                />
                <h2
                  style={{
                    position: "absolute",
                    color: "white",
                    bottom: "0vh",
                    textShadow: "1px black",
                    marginLeft: "1vw",
                    fontSize: "2em",
                  }}
                >
                  This Website
                </h2>
              </CardActionArea>
            </Card>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href="https://github.com/epfenninger">
            <Card>
              <CardActionArea>
                <h2
                  style={{
                    position: "absolute",
                    color: "black",
                    top: "0vh",
                    textShadow: "1px black",
                    marginLeft: "1vw",
                    fontSize: "1em",
                  }}
                >
                  Everything
                </h2>
                <CardMedia
                  style={{
                    objectFit: "",
                    height: "20vh",
                    width: "100%",
                    margin: "auto",
                  }}
                  component="img"
                  image={require("../images/github.png")}
                  alt=""
                />
              </CardActionArea>
            </Card>
          </a>
        </Grid>
      </Grid>
    );
  }
}

export default Portfolio;
