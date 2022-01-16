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
    overflow: hidden;
    top: 30%;
  }
  .panel.navbar {
    position: fixed;
    height: 0vh;
    z-index: 1;
    top: 0;
    width: 100%;
    background-color: #ffffff;

    @navbutton {
      color: white;
    }
  }

  .panel.home {
    height: 40vh;
  }

  .panel.tilegrid {
    height: 70vh;

    .skills {
      position: relative;
      top: -20vh;
      color: #ffffff;
    }
  }

  .panel.experience {
    background-color: #cfd8dc;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    .select {
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: white;
      font-size: 1.8vw;
      align-items: center;
      font-weight: bold;
    }
  }

  .panel.portfolio {
    background-color: #cfd8dc;
    height: 100vh;
  }

  .panel.contact {
    background-color: #cfd8dc;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <SectionWipesStyled>
      <div className="panel navbar">
        <NavBar />
      </div>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene pin="FALSE">
          <div className="panel home">
            <Home />
          </div>
        </Scene>
        <Scene>
          <div className="panel tilegrid">
            <span>
              <TileGrid />
            </span>
          </div>
        </Scene>
        <Scene pin>
          <div className="panel experience">
            <Experience />
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
