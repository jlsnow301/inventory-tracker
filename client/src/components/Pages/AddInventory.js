import React from "react";

import Input from "../UIElements/FormElements/Input";
import Button from "../UIElements/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../Functions/validators";
//import PostHttp from "../Functions/AxiosHttp";
import { useForm } from "../Hooks/form-hook";

import "../../css/AddForm.css";

const AddInventory = (props) => {
  // Initial states
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      owner: {
        value: "",
        isValid: false,
      },
      history: {
        value: "",
        isValid: false,
      },
      items: {
        value: "",
        isValid: false,
      },
      access: {
        value: "",
        isValid: false,
      },
      inventoryCount: {
        value: "",
        isValid: false,
      },
      date: {
        value: "",
        isValid: false,
      },
    },
    false
  );  

  // Takes the item and updates an individual attribute
  const inventorySubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    //post axios here
  };

  // Returns
  return (
    <form className="add-form" onSubmit={inventorySubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid name."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="owner"
        element="textarea"
        label="Owner"
        validators={[]}
        errorText="Placeholder."
        onInput={inputHandler}
      />
      <Input
        id="history"
        element="input"
        type="text"
        label="History"
        validators={[]}
        errorText="Placeholder."
        onInput={inputHandler}
      />
      <Input
        id="items"
        element="input"
        type="text"
        label="Items"
        validators={[]}
        errorText="Placeholder."
        onInput={inputHandler}
      />
      <Input
        id="access"
        element="textarea"
        label="Access Level"
        validators={[]}
        errorText="Placeholder."
        onInput={inputHandler}
      />
      <Input
        id="inventoryCount"
        element="textarea"
        label="Inventory Count"
        validators={[]}
        errorText="Placeholder."
        onInput={inputHandler}
      />
      <Input
        id="date"
        element="textarea"
        label="Date"
        validators={[]}
        errorText="Placeholder."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD INVENTORY
      </Button>
    </form>
  );
};

export default AddInventory;
