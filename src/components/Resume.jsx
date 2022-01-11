import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";
import TileGrid from "../components/TileGrid";

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }

  .panel span {
    position: relative;
    overflow: visible;
    top: 50%;
    font-size: 80px;
  }

  .panel.main {
    background-color: #121212;
  }

  .panel.skills {
    background-color: #121212;
  }

  .panel.experience {
    background-color: #121212;
    margin-bottom: 800px;
  }

  .panel.contact {
    background-color: #121212;
  }
`;

class Resume extends React.Component {
  render() {
    return <p>test</p>;
  }
}

export default Resume;
