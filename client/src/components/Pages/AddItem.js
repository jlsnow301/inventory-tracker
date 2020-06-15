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

const AddItem = (props) => {
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
      category: {
        value: "",
        isValid: false,
      },
      dosage: {
        value: "",
        isValid: false,
      },
      quantity: {
        value: "",
        isValid: false,
      },
      preparation: {
        value: "",
        isValid: false,
      },
      brand: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // Takes the item and updates an individual attribute
  const itemSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    //post axios here
  };

  // Returns
  return (
    <form className="add-form" onSubmit={itemSubmitHandler}>
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
        id="category"
        element="textarea"
        label="Category"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid category (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="dosage"
        element="input"
        type="text"
        label="Dosage"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a number."
        onInput={inputHandler}
      />
      <Input
        id="quantity"
        element="input"
        type="text"
        label="Quantity"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a number."
        onInput={inputHandler}
      />
      <Input
        id="preparation"
        element="textarea"
        label="Preparation"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid preparation (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="brand"
        element="textarea"
        label="Brand Name"
        validators={[VALIDATOR_MINLENGTH(3)]}
        errorText="Please enter a valid brand name (at least 3 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD ITEM
      </Button>
    </form>
  );
};

export default AddItem;
