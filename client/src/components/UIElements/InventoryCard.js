import React from "react";
import styled from "@emotion/styled";

const Card = ({ index, item }) => {
  // Styling
  const Container = styled.div`
    margin: 10px;
    background: rgb(255, 255, 255);
    width: 22.5%;
    height: 300px;
    border: 2px solid dimgray;
    border-radius: 8px;
    overflow: auto;
  `;
  const Header = styled.div`
    margin-left: 10px;
    margin-bottom: 5px;
  `;

  index = parseInt(index) + 1;
  // For now, we are simply adding mongodb defaults to hidden keys
  var hiddenKeys = [];
  hiddenKeys += ["id", "_id", "__v"];

  const DisplayDetails = () => {
    var entries = [];
    for (let [key, value] of Object.entries(item)) {
      if (hiddenKeys.indexOf(key) >= 0) {
        continue;
      }
      entries.push(
        <li key={key}>
          <b>{key}: </b>
          {value}
        </li>
      );
    }
    return entries;
  };

  // Returns
  return (
    <Container>
      <Header>
        <u>
          <b>Item #</b>
          {index}
        </u>
        <div style={{ flex: 1 }} />
        <img
          align="right"
          width="30%"
          height="40%"
          src="./bottle.png"
          alt="Product Icon"
        />
      </Header>
      <ol>
        <DisplayDetails />
      </ol>
    </Container>
  );
};

export default Card;
