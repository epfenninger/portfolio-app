import React, { Component } from "react";
import Card from "@mui/material/Card";
import ReactTextRotator from "react-text-rotator";

const content = [
  {
    text: "Educator",
    className: "classA",
    animation: "fade",
  },
  {
    text: "Developer",
    className: "classB",
    animation: "fade",
  },
  {
    text: "Instructional Designer",
    className: "classC",
    animation: "fade",
  },
  {
    text: "Mentor",
    className: "classD",
    animation: "fade",
  },
  {
    text: "Learner",
    className: "classE",
    animation: "fade",
  },
];

const cardStyle = {
  display: "block",
  width: "100%",
  transitionDuration: "0.3s",
  height: "45vw",
  backgroundColor: "rgba(0, 0, 0, .3)",
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <Card style={cardStyle} elevation={8}>
          <h1 marginLeft="10vh">
            Hi, I'm Ethan! I'm a(n){" "}
            <ReactTextRotator
              content={content}
              time={2000}
              startDelay={500}
              transitionTime={200}
            />
          </h1>
        </Card>
      </div>
    );
  }
}

export default Home;
