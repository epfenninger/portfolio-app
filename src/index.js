import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";
import ReactDOM from "react-dom";
import "./index.css";
import TileGrid from "./components/TileGrid";
import { Tween, Timeline } from "react-gsap";
import backgroundvideo from "./images/background.mp4";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/navbar";

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100%;
  }

  .panel span {
    position: relative;
    overflow: visible;
    top: 50%;
  }

  .navbar.navbartext {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  variant: "outlined",
  fontSize: "1.3vw",
  }

  .panel.home {
    background-color: #121212;
  }

  .panel.tilegrid {
    background-color: #212121;
    height: 110vh;

    .skills {
      position: relative;
      top: -40vh;
    }
  }

  .panel.experience {
    background-color: #eeeeee;
    height: 110vh;
  }

  .panel.portfolio {
    background-color: #616161;
    height: 110vh;
  }

  .panel.contact {
    background-color: #3b3b3b;
    height: 110vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <SectionWipesStyled>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <div className="navbar">
          <NavBar />
        </div>

        <Scene pin>
          <div className="panel home">
            <span>
              <Home />
            </span>
          </div>
        </Scene>
        <Scene pin>
          <div className="panel tilegrid">
            <span>
              <TileGrid />
            </span>
          </div>
        </Scene>
        <Scene pin>
          <div className="panel experience">
            <span>
              <Experience />
            </span>
          </div>
        </Scene>
        <Scene pin>
          <div className="panel portfolio">
            <span>
              <Portfolio />
            </span>
          </div>
        </Scene>
        <Scene pin>
          <div className="panel contact">
            <span>
              <Contact />
            </span>
          </div>
        </Scene>
      </Controller>
    </SectionWipesStyled>
  </React.StrictMode>,
  document.getElementById("root")
);
