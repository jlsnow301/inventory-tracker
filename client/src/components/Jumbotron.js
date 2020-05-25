import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background-size: cover;
    color: black;
    height: 150px;
    position: relative;
    z-index: -2;
  }

  .overlay {
      background-color: #000
      opacity: 0.1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
  }

`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container></Container>
    </Jumbo>
  </Styles>
);