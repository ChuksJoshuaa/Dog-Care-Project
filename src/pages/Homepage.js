import React from "react";
import styled from "styled-components";
import { Hero, Featureddog, Breed, News, Counter, Review } from "../components";

const Homepage = () => {
  return (
    <Wrapper>
      <div className="head">
        <Hero />
        <Featureddog />
        <Breed />
        <News />
        <Counter />
        <Review />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow-x: hidden;
`;

export default Homepage;
