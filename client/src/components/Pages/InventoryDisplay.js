import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";
import InventoryCard from "../UIElements/InventoryCard";
import GetHttp from "../Functions/AxiosHttp";

const InventoryDisplay = (props) => {
  // Styling
  const Container = styled.div`
    display: flex;
    background: rgb(235, 235, 235);
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px solid rgb(120, 120, 120);
    justify-content: space-around;
    height: 775px;
    overflow: auto;
  `;

  // Initial states.
  const [inventory, setInventory] = useState([]);

  const GetInventory = () => {
    let cards = [];
    Object.keys(inventory).forEach((key) =>
      cards.push(<InventoryCard key={key} index={key} item={inventory[key]} />)
    );
    return cards;
  };

  useEffect(() => {
    setInventory(GetHttp("inventory", `/${props.query}`));
  }, [props.query]);

  // Returns
  return (
    <Container>
      <GetInventory />
    </Container>
  );
};

export default InventoryDisplay;
