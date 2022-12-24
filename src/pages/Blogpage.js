import React, { useState } from "react";
import styled from "styled-components";
import { Blog } from "../components";
import { data } from "../utils/tools";

const Blogpage = () => {
  const [datas, _setDatas] = useState(data);
  return (
    <Wrapper>
      <div className="oga">
        <div>
          <h1 style={{ visibility: "hidden" }}>Articles</h1>
        </div>
        <article>
          {datas.map((item) => {
            return <Blog key={item.id} {...item} />;
          })}
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 5%;

  .oga {
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;

    article {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
    }
  }

  @media screen and (max-width: 1311px) {
    .oga article {
      place-items: center;
      /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 784px) {
    .oga article {
      place-items: center;
      grid-template-columns: 1fr;
    }
  }
`;

export default Blogpage;
