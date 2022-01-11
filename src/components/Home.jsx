// @flow
import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typewriter } from "typewriting-react";

const styles = {
  card: {
    position: "relative",
    top: "-47vh",
  },
  overlay: {
    position: "absolute",
    top: "-1vh",
    left: "3vw",
    width: "80vw",
    maxHeight: "40vh",
  },
  header: {
    fontSize: "2.2vw",
    font: "arial",
    color: "white",
    marginBottom: "-1vh",
  },
  header2: {
    fontSize: "2.3vw",
    font: "arial",
    marginLeft: "4vw",
    color: "white",
    display: "inline-block",
  },
  desc: {
    fontSize: "2.4vw",
    font: "arial",
    color: "#8bc34a",
    marginLeft: ".7vw",
    display: "inline-block",
  },
};

const words = [
  "an instructional designer.",
  "a data analyst.",
  "a LMS manager.",
  "a developer.",
  "a lifelong learner.",
];

const Home = () => (
  <div className="home">
    <card style={styles.card} elevation={8}>
      <CardMedia
        style={{
          width: "100vw",
          height: "40vh",
          objectFit: "cover",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        component="img"
        image={require("../images/backgroundhomecomputer.png")}
        alt="Test"
      />
      <div style={styles.overlay}>
        <h2 style={styles.header}>
          Hey! I'm Ethan. Here is what you should know about me:
        </h2>
        <h2 style={styles.header2}>I'm </h2>
        <h2 style={styles.desc}>
          <Typewriter words={words} />
        </h2>
      </div>
    </card>
  </div>
);

export default Home;
