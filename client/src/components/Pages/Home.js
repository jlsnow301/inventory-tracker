import React from "react";
import styled from "@emotion/styled";

const Home = () => {
  // Styling
  const Container = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    padding: 20px;
  `;

  const Intro = styled.div`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: Roboto, Georgia, "Times New Roman", Times, serif;
    padding-right: 30px;
    text-align: left;
  `;

  const Heading = styled.div`
    font-family: Roboto, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: #2b2d42;
    text-align: left;
    margin-bottom: 20px;
  `;

  const Main = styled.div`
    text-align: justify;
    postition: relative;
    overflow: hidden;
    padding: 0px 90px;
  `;

  const Services = styled.div`
    display: grid;
    height: auto;
    grid-gap: 20px;
    grid-auto-rows: repeat(3, 1fr);
    padding: 10px;
  `;

  const ServiceOne = styled.div``;

  const ServiceIcon = styled.p`
    font-size: 3.4rem;
    padding: 20px 0px 20px 90px;
    margin: 0px 0px 30px 0px;
    text-align: left;
    border-bottom: 2px solid #edf2f4;
  `;

  const ServiceTitle = styled.p`
    font-size: 2.1rem;
    padding: 0;
    margin: 0;
    color: #ef233c;
  `;

  const ServiceTwo = styled.div``;
  const ServiceThree = styled.div``;

  const Gallery = styled.div`
    grid-template-columns: repeat(3, 1fr);
    height: auto;
    width: 95%;
    margin: 80px auto 0px auto;
  `;

  const Photos = styled.div`
    max-width: 100%;
    height: auto;
    position: center;
    overflow: hidden;
    filter: grayscale(35%);
  `;

  const ImgOne = styled.div`
    background-size: 100%;
    image-align: center;
  `;

  return (
    <Container>
      <Main>
        <Intro>
          <h3>Welcome to the inventory manager</h3>
        </Intro>

        <div>
          <Heading>
            <h1>This is the landing page</h1>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div>
          <Gallery>
            <Photos>
              <div>
                <ImgOne>
                  <img
                    src="./redBg1.png"
                    width=" 100% "
                    alt="Pharmaceuticals"
                  />
                </ImgOne>
              </div>
            </Photos>
          </Gallery>
        </div>

        <div>
          <Services>
            <ServiceOne>
              <ServiceIcon></ServiceIcon>
              <ServiceTitle>Organization</ServiceTitle>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </ServiceOne>
          </Services>
        </div>

        <div>
          <Services>
            <ServiceTwo>
              <ServiceIcon></ServiceIcon>
              <ServiceTitle>Resources</ServiceTitle>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </ServiceTwo>
          </Services>
        </div>

        <div>
          <Services>
            <ServiceThree>
              <ServiceIcon></ServiceIcon>
              <ServiceTitle>Information</ServiceTitle>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </ServiceThree>
          </Services>
        </div>
      </Main>
    </Container>
  );
};

export default Home;
