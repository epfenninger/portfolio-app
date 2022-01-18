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
            content="Under Construction!"
            textColor={"#FFFFFF"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Comparing SCORM and xAPI"
            skills="L&D, API, Camtasia"
            imgSrc={require("../images/scormxapi.png")}
            content="Under Construction"
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Integrating Tensorflow Object detection via API"
            skills="API, ML, Python"
            imgSrc={require("../images/tensorflow_lite.png")}
            content="Under Construction!"
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
            contentPicture={require("../images/DataAnalysis.jpg")}
            content={`One of the challenges I have as a Technology Integrationist is
              staying on top of the two dozen(ish) online technology resources
              that we offer teachers.
              
              I was recently asked to gather some
              quantitative data on how much these technology resources are being
              used to see if we could trim the software budget. This was also a
              great chance to get more data on technology usage in the classroom
              to better target future micro-trainings.
              
              The issue with data collection here is that many of these resources offer their own means of presenting use. Going through each to collate data would've been time-consuming, and some didn't even have any form of accessible data.

              Like many schools, we have a filter on the student's Chromebooks. This allowed me to see what students accessed a specific resource on a given date and download this information as a CSV.

Which still sounded like a pain and was time-consuming enough that it wouldn't allow me to collect real-time data. Without a public-facing API, I couldn't easily automate, but I knew that if I could get the info out with my Browser, I could figure this out.

So - time to break out the Python, NumPy, and the Google Inspector tool. After a little creative sleuthing, I found the GET URL, borrowed some cookies from my Browser, and presto.

Clearly, we have some tools that we need to utilize better (websites removed for some anonymity)`}
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Reverse Engineering undocumented modbus platform"
            skills="API, Data Analysis, Python"
            imgSrc={require("../images/modbus.png")}
            content=""
            textColor={"black"}
            imgFit={"scale-down"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Systems Integration for Smart-Van Build"
            skills="Python, API, Data Analytics, Camtasia"
            imgSrc={""}
            content=""
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Van Build!"
            skills="Fun"
            imgSrc={require("../images/van.jpg")}
            content=""
            textColor={"black"}
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Managing G-Suite via GAM and Google AppScript"
            skills="Javascript, Systems Admin"
            imgSrc={require("../images/gsuite.jpg")}
            content=""
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
