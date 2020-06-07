import React, { useState } from "react";
import styled from "@emotion/styled";

import Modal from "react-modal";
import About from "../views/About";
import Contact from "../views/Contact";
import AddItem from "../dashboard/AddItem";
import AddInventory from "../dashboard/AddInventory";

const PopupButton = ({ button, props }) => {
  // Styling
  const Container = styled.div`
    margin-right: ${button === "addInventory" ? "20px" : "0px"};
    background: white;
  `;
  const Header = styled.div`
    display: flex;
  `;

  // This switch tells it what modal to return.
  let title = "";
  let component = "";
  switch (button) {
    case "about":
      title = "About";
      component = <About />;
      break;
    case "contact":
      title = "Contact";
      component = <Contact />;
      break;
    case "advsearch":
      title = "Adv Search";
      break;
    case "overview":
      title = "Overview";
      break;
    case "settings":
      title = "Settings";
      break;
    case "addItem":
      title = "Add Item";
      component = <AddItem props={props} />;
      break;
    case "addInventory":
      title = "Add Inventory";
      component = <AddInventory />;
      break;

    default:
      break;
  }

  // Ensures modal can close and open properly
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Returns
  return (
    <Container>
      {Modal.setAppElement("body")}
      <button onClick={() => setModalIsOpen(true)}>{title}</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Header>
          <div style={{ flex: 1 }}></div>
          <button
            style={{ border: 10, background: "none" }}
            onClick={() => setModalIsOpen(false)}
          >
            <img width="60" src="./exit.png" alt="Close" />
          </button>
        </Header>

        {component}
      </Modal>
    </Container>
  );
};

export default PopupButton;
