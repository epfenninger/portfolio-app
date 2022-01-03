import React, { Component } from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "Expected May 2022",
    cardTitle: "Masters in Educational Technology and Curriculum Design",
    cardDetailedText:
      "Today I'm looking to leverage my experience in Instructional Design, Educational Best-Practice, and LMS Administration to move into the corporate arena",
  },
  {
    title: "January 2022",
    cardTitle: "Google Project Management and Data Analytics Professional",
    cardDetailedText:
      "Today I'm looking to leverage my experience in Instructional Design, Educational Best-Practice, and LMS Administration to move into the corporate arena",
  },
  {
    title: "August 2019 - Present",
    cardTitle: "Alton Central School",
    cardDetailedText: "ACS Tag Text",
  },
  {
    title: "August 2017 - August 2019",
    cardTitle: "Holderness",
    cardDetailedText: "Holderness Text",
  },
  {
    title: "May 2015",
    cardTitle: "Graduated from UNH - B.S. Information Technology",
    cardDetailedText: "UNH TagLine",
  },
  {
    title: "March 2015 - August 2017",
    cardTitle: "Tilton School",
    cardDetailedText: "Tilton TagLine",
  },
];
class Experience extends React.Component {
  render() {
    return (
      <div
        className="text-center"
        style={{
          display: "flex",
          width: "90vh",
          margin: "auto",
          height: "90vh",
        }}
      >
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          scrollable={{ scrollbar: false }}
        />
      </div>
    );
  }
}

export default Experience;
