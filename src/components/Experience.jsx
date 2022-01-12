// @flow
import React, { useState } from "react";
import ExperienceCard from "./experienceCard";
import content from "../data/content.json";

function getItems(id) {
  let newData = [];
  content.forEach((element) => {
    if (element.Type == id) newData.push(element);
  });
  return newData;
}

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: content,
    };
    console.log(getItems(""));
  }

  expItems = getItems("education").map((item) => (
    <ExperienceCard
      title={item.title}
      subheader={item.subheader}
      mainContent={item.mainContent}
      subContent={item.subContent}
    />
  ));

  render() {
    return <div className="experience">{this.expItems}</div>;
  }
}

export default Experience;
