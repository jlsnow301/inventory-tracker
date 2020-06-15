/*  This is a style sheet for coding es6 components
    Subject to change
    Table of contents:
        1. short examples
        2  full example with descriptions
          1. import statements
          2. component declaration
          3. inline styling
          4. state initialization
          5. logic
          6. on-load function
          7. return statement
          8. any other micro logic
          9. export statement
*/

//////////////////////////////////////////////////////////////////////////
// Here is another bare-bones example to show you what's "needed" in an es6 component
// If we called this elsewhere, <BareBones/>, we would see the empty div it returns
import React from "react";

const BareBones = () => {
  return <div></div>;
};

export default bareBones;

//////////////////////////////////////////////////////////////////////////
// One with a function
// Calling this component elswhere would return our div AND h1, because it's in the return
import React from "react";

const OneFunction = () => {
  const doesSomething = () => {
    return <h1>doesSomething</h1>;
  };

  return (
    <div>
      <doesSomething />
    </div>
  );
};

export default oneFunction;
//////////////////////////////////////////////////////////////////////////
// We can also run a function within useEffect to make it run on start
// You don't "need" to have functions in the return, you can set them on-load
// This can be tricky, some things don't stop reloading
import React from "react";

const OnLoad = () => {
  useEffect = () => {
    // We would see this each render.
    console.log("Page loaded");
  };

  return <div></div>;
};

export default onLoad;

///////////////////////////////////////////////////////////////////////////
// Full example, broken down
// We import things here to use them in the document
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
// import componentInSameFolder from './filename'
// import componentsDownOneFolder from  './foldername/filename'
// import componentsUpOneFolder from '../folderOrFile'
// import module from 'module'

// Think of this as public class StyleGuide(object: Int){
const StyleGuide = (parameters) => {
  // Styled lets us create our own html tags with css attributes inside
  const Container = styled.div`
    margin: 0 auto;
    background: white;
    display: flex;
  `;

  // State is what causes rerendering in the page. If something needs passed around (say, a search term), it would be here.
  // stateName is a variable indicating state, like "true or false"
  // setStateName is the function called elsewhere to change the state, causing a rerender.
  // "useState("")" makes the default blank.
  const [stateName, setStateName] = useState("");
  const [display, setDisplay] = useState("Hello");

  const SomeMethod = () => {
    console.log("This writes a function to be called in the return block");
    console.log("Think of the return block as the psvm portion in java");
    if (!loggedIn) {
      setDisplay("You can make a function switch the state of something else");
      // If another component was displaying display, it would see the change and re-render
    }
  };

  const DisplayStuff = (likeWhat) => {
    // The likeWhat parameter can be anything you want
    console.log(`Well, here you have it: ${likeWhat}`);
  };

  // For demo later.
  const loggedIn = true;

  // The useEffect renders on load.
  useEffect =
    (() => {
      console.log("This is what you'd want run at the start of the page.");
      console.log(
        "You could call DisplayStuff() here if you wanted to call it on load"
      );
      console.log("Note: Things in the return block are still going to load");
      // We'll display something else than default on startup
      DisplayStuff(display);
    },
    [display]); // The second part here is what you want as dependencies to effect

  // The return statement is just the PSVM translation of JSX
  // The return statement requires one (1) tag to enclose the entire component.
  // This is where I like to use "container"  but you could technically name it anything
  return (
    <Container>
      {console.log("Micrologic would go here?")}
      {console.log("You can manipulate what return displays using js.")}
      {console.log("I like to keep it short, not writing functions here.")}
      {console.log("User not logged in? Don't display a block.")}
      {loggedIn ? <b>Yes, user is logged in</b> : `No, user is not logged in`}
      {console.log(
        "You don't need to use ternary 'expression ? ifTrue : ifFalse' style, either"
      )}
      <h1>
        Outside of your micro logic can go other components, so log as you
        imported them
      </h1>
      <br />
      <Home />
      <br />
      You get the squigglies here because home isn't imported.
      <br />
      <SomeMethod />
    </Container>
  );
};

// The export statement allows the entire component to be used elsewhere, used in a return block as a tag <StyleGuide>.
// React makes functions styled like HTML.
// exporting it makes it the same as public class StyleGuide{}
// Calling it as <StyleGuide/> is just StyleGuide();
export default StyleGuide;
