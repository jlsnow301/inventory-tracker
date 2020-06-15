import React, { useContext } from "react";

import styled from "@emotion/styled";
import Avatar from "./Avatar";
import NavLinks from "./NavLinks";
import { AuthContext } from "../../Functions/auth-context";

const Toolbar = (props) => {
  // Styling
  const Container = styled.div`
    display: flex;
    background: #bd0028;
    padding: 6px 8px;
    width: 100%;
    height: 50%;
    justify-content: flex-start;
  `;
  const UserInfo = styled.div`
    height: 60px;
    display: flex;
    justify-content: row;
  `;
  const DummyAvatar = styled.img`
    width: 15%;
    height: 100%;
  `;
  const DummyInfo = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    align: center;
  `;

  const auth = useContext(AuthContext);

  // Returns
  return (
    <Container>
      {!auth.isLoggedIn ? (
        <React.Fragment>
          <Avatar source={`./logo1.png`} />
          <div style={{ flex: 1 }} />
          <NavLinks />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <UserInfo>
            <DummyAvatar src="./memeguy.png" alt="User" />
            <DummyInfo>
              <h2>Tester's Inventory</h2>
            </DummyInfo>
          </UserInfo>
          <div style={{ flex: 1 }} />
          <NavLinks />
        </React.Fragment>
      )}
    </Container>
  );
};

export default Toolbar;
