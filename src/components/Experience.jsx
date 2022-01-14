// @flow
import React, { useState } from "react";
import ExperienceCard from "./experienceCard";
import content from "../data/content.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { borderBottom } from "@mui/system";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      select: "Experience",
    };

    this.handleChange = this.handleChange.bind(this);
    this.expItems = this.expItems.bind(this);
  }

  async componentDidMount() {
    this.setState({ data: "" });
    let d = await content;
    this.setState({ data: content });
  }

  expItems() {
    let newData = [];
    if (content.length > 0) {
      content.forEach((element) => {
        if (element.Type.toLowerCase === this.state.select.toLowerCase) {
          console.log("Element " + element.Type);
          console.log("Selected " + this.state.select);
          newData.push(element);
        }
      });
    }
    return newData.map((item) => (
      <ExperienceCard
        title={item.title}
        subheader={item.subheader}
        mainContent={item.mainContent}
        subContent={item.subContent}
      />
    ));
  }

  handleChange(event) {
    this.setState({ select: event.target.value });
    this.expItems();
    this.render();
  }

  render() {
    return (
      <div className="experience">
        <div className="select" style={{ display: "inline-block" }}>
          <h2> Show me your: </h2>
          <FormControl
            variant="standard"
            sx={{ m: 3, minWidth: "12vw" }}
            size="large"
          >
            <Select
              labelId="experience"
              id="experience"
              value={this.state.select}
              onChange={this.handleChange}
              defaultValue="Experience"
              style={{
                color: "white",
                fontSize: "1.7vw",
                borderBottomColor: "white",
                fill: "white",
              }}
            >
              <MenuItem value={"Experience"}>Experience</MenuItem>
              <MenuItem value={"Education"}>Education</MenuItem>
              <MenuItem value={"Certifications"}>Certifications</MenuItem>
            </Select>
          </FormControl>
        </div>
        {this.expItems()}
      </div>
    );
  }
}

export default Experience;
