import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";
import ReactDOM from "react-dom";
import "./index.css";
import TileGrid from "./components/TileGrid";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/navbar";

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    width: 100%;
  }

  .panel span {
    position: relative;
    overflow: hidden;
    top: 30%;
  }
  .panel.navbar {
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
    min-height: 325px;
  }

  .panel.tilegrid {
    height: 70vh;
    min-height: 500px;

    .skills {
      color: #ffffff;
      position: relative;
      top: 2vh;
    }
  }

  .panel.experience {
    background-color: #cfd8dc;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    min-height: 1000px;

    .select {
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: black;
      font-size: 1.8vw;
      align-items: center;
      font-weight: bold;
    }
  }

  .panel.portfolio {
    background-color: #cfd8dc;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .panel.contact {
    background-color: #cfd8dc;
    height: 110vh;
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
            <TileGrid />
          </div>
        </Scene>
        <Scene pin="FALSE">
          <div className="panel experience">
            <Experience />
          </div>
        </Scene>
        <Scene pin="FALSE">
          <div className="panel portfolio">
            <Portfolio />
          </div>
        </Scene>
        <Scene pin="FALSE">
          <div className="panel contact">
            <Contact />
          </div>
        </Scene>
      </Controller>
    </SectionWipesStyled>
  </React.StrictMode>,
  document.getElementById("root")
);
