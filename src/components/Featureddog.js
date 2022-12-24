import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../utils/tools";
import Blog from "./Blog";

const Featureddog = () => {
  const [datas, _setDatas] = useState(data);

  return (
    <Wrapper>
      <div className="top">
        <div className="title" data-aos={"zoom-out"}>
          <h1>Featured Puppy Articles</h1>
        </div>
        <article>
          {datas.slice(0, 3).map((item) => {
            return <Blog key={item.id} {...item} />;
          })}
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 5%;
  overflow-x: hidden;

  .top {
    max-width: 1200px;
    margin: 0 auto;
    width: 90vw;
  }

  article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .title h1 {
    text-align: center;
    font-size: 1.8rem;
    letter-spacing: 0.125rem;
    font-weight: 600;
    color: #222;
    font-family: "Rajdhani", sans-serif;
    text-transform: uppercase;
    margin-bottom: 1%;
  }

  @media screen and (max-width: 1311px) {
    article {
      place-items: center;
      /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 784px) {
    article {
      place-items: center;
      grid-template-columns: 1fr;
    }
    .title h1 {
      font-size: 1.2rem;
    }
  }
`;

export default Featureddog;
