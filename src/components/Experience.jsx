// @flow
import React, { useState } from "react";
import ExperienceCard from "./experienceCard";
import content from "../data/content.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { borderBottom } from "@mui/system";

function filterPortfolio(item) {
  console.log("filter Called");
  let newData = [];
  content.forEach((element) => {
    console.log(element.type.length);
    if (element.type.toLowerCase() === item.toLowerCase()) {
      newData.push(element);
    }
  });
  return newData;
}

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      select: "Experience",
    };

    this.handleChange = this.handleChange.bind(this);
    this.expItems = this.expItems.bind(this);
    this.expItems("Experience");
  }

  expItems(value) {
    this.setState({ select: value });
    let filtered = filterPortfolio(value);
    this.state.data = filtered.map((item) => (
      <ExperienceCard
        title={item.title}
        header={item.header}
        mainContent={item.mainContent}
        subContentHeader={item.subContentHeader}
        subContent={item.subContent}
        imgSrc={item.imgSrc}
      />
    ));
  }

  handleChange(event) {
    this.expItems(event.target.value);
    this.render();
  }

  render() {
    return (
      <div className="experience">
        <div className="select">
          <h2> See My </h2>
          <FormControl
            variant="standard"
            sx={{ m: 3, minWidth: "13vw" }}
            size="large"
          >
            <Select
              labelId="experience"
              id="experience"
              value={this.state.select}
              onChange={this.handleChange}
              defaultValue="Experience"
              style={{
                color: "black",
                fontSize: "2.5vw",
                borderBottomColor: "black",
                fill: "black",
              }}
            >
              <MenuItem value="Experience">Experience</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Certificate">Certifications</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ padding: "0 0 20em 5em" }}>{this.state.data}</div>
      </div>
    );
  }
}

export default Experience;
