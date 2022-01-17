import * as React from "react";
import PortfolioCard from "./PortfolioCard";
import Grid from "@mui/material/Grid";
import image from "../images/background.jpg";

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
      >
        <Grid item xs={4}>
          <PortfolioCard
            title="Integrating Tensorflow Object detection via API"
            imgSrc={require("../images/background.jpg")}
            content={<img src={require("../images/background.jpg")} />}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Portfolio;
