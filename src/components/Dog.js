import React from "react";
import styled from "styled-components";
import { useDoggoContext } from "../contexts/dogs_context";
import Loading from "../components/Loading";

const Dog = () => {
  const { dogs_loading: loading, dogs } = useDoggoContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="dog-head">
        {dogs.slice(0, 20).map((doggo, index) => {
          const { breed, url, img, origin} = doggo;
          return (
            <div key={index} className="dog-body" data-aos={"zoom-in"}>
              <a href={url}>
                <img src={img} alt={breed} />
              </a>
              <h1>Breed: {breed}</h1>
              <p>Origin: {origin}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 5%;
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;

  .dog-head {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    margin-bottom: 5%;

    .dog-body {
      border: 1px solid silver;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .dog-body img {
      width: 100%;
      height: 250px;
    }

    .dog-body h1 {
    margin: 10px;
    text-align: left;
    font-size: 1rem;
    letter-spacing: 0.125rem;
    font-weight: 600;
    color: crimson;
    font-family: "Rajdhani", sans-serif;
    }

    .dog-body p {
    margin-left: 10px;
    text-align: left;
    font-size: 0.8rem;
    letter-spacing: 0.125rem;
    font-weight: 600;
    color: #222;
    font-family: "Rajdhani", sans-serif;
    }
  }
  @media screen and (max-width: 898px){
    .dog-head {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      margin-bottom: 5%;
    }
  }
`;

export default Dog;
