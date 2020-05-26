import React from "react";
import styled from "@emotion/styled";

const Contact = () => {
  const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    text-align: left;
    font-family: sans-serif;
  `;
  return (
    <ContactContainer>
      <div className="col-6 col-md-6 text-right">
        <h1>turpis nunc eget lorem dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur s // Validation if there is a user with the user's
          name // For now, unless devmode is enabled, you need one of our names
          var users = ["anthony", "selina", "margarita", "jerm"]; // TEST ->
          inserting a userkey //const username = String(prompt("Enter a
          username: ")).toLowerCase(); //const loggedIn =
          users.indexOf(username) >= 0; // var devmode = String(prompt("Dev
          mode? Type Y or N: ")).toLowerCase();int occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="row align-items-lg-center">
        <div className="col-6 col-md-12 text-center text-md-right">
          <div className="section-heading mb-3">
            <h1>We'd love to hear from you </h1>
          </div>

          <div>
            <label>First Name</label>
            <br></br>
            <input type="text" id="fname" name="firstname" />
            <br></br>
            <label>Last Name</label>
            <br></br>
            <input type="text" id="fname" name="firstname" />
            <br></br>
            <label>Email</label>
            <br></br>
            <input type="text" id="fname" name="firstname" />
            <br></br>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
