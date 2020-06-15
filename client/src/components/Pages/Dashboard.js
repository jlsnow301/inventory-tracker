import React, { useState } from "react";
import styled from "@emotion/styled";

import InventoryDisplay from "./InventoryDisplay";
import Button from "../UIElements/FormElements/Button";

const Dashboard = (props) => {
  // Styling
  const Container = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    padding: 20px;
  `;
  const Header = styled.div`
    display: flex;
    height: 4%;
    flex-direction: space-around;
    font-family: Merriweather;
    margin: 10px;
  `;
  const Tools = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const Body = styled.div`
    margin-top: 10px;
  `;

  // Initial state
  const [query, setQuery] = useState("");
  const inputText = React.createRef();

  // Changes the query, which is passed to inventory display.
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputText.current.value);
  };

  // Returns
  return (
    <Container>
      <Header>
        <h1>
          <b>Item View</b>
        </h1>
        <div style={{ flex: 1 }}></div>
        <Tools>
          <Button to={"/:userId/addItem"}>Add Item</Button>
          <Button to={"/:userId/addInventory"}>Add Inventory</Button>
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              type="text"
              ref={inputText}
              placeholder="Enter keywords..."
            />
            <input type="submit" value="Submit" />
          </form>
        </Tools>
      </Header>
      <Body>
        <InventoryDisplay query={query} />
      </Body>
    </Container>
  );
};

export default Dashboard;
