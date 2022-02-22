import React from "react";
import styled from "styled-components";
import Searchform from "../components/Searchform";
import Dog from "../components/Dog";

const Dogpage = () => {
  return (
    <Wrapper>
      <div>
        <Searchform />
        <Dog />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #f1f5f8;
`;

export default Dogpage;
