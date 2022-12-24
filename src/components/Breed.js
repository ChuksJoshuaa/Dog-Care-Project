import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../utils/images/dog5.jpg";

const Breed = () => {
  return (
    <Wrapper>
      <div className="breed-head">
        <div className="breed-body">
          <div className="breed-second">
            <img src={image} alt="dog" />
          </div>
          <div className="breed-first">
            <h3>DOGS FILL OUR LIVES WITH JOY</h3>
            <h1>IT’S TIME TO REPAY THE FAVOR</h1>
            <p>
              We’ve created a loving place with dogs’ wants and needs in mind.
              We offer everything your furry family member requires with
              award-winning dog daycare, overnight, weekend and holiday
              boarding, and spa services. Use our webcams to watch them play all
              day with their BFFFs (best furry friends forever) in open and safe
              environments. Professionally trained Dogtopians will love and care
              for your pup like they are our own. You can trust your dog will
              come home overjoyed – and most likely overtired – from all of the
              excitement of the day.
            </p>
            <Link to="/dog" className="btn">
              Dog Breeds
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 5%;

  .breed-head {
    height: 500px;
    width: 100%;
    margin-bottom: 3%;
    background: rgb(81, 82, 84);
  }

  .breed-body {
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 15px;
  }

  .breed-first h3 {
    margin-top: 5%;
    font-size: 1.5rem;
    font-family: "Racing Sans One", sans-serif;
    color: crimson;
    font-weight: 200;
    letter-spacing: 0.125rem;
  }

  .breed-first h1 {
    margin-top: 3%;
    font-size: 2.2rem;
    font-family: "Rajdhani", sans-serif;
    color: white;
    font-weight: 800;
    letter-spacing: 0.125rem;
    margin-bottom: 4%;
  }

  .breed-first p {
    margin-top: 4%;
    font-size: 1rem;
    font-family: "Rajdhani", sans-serif;
    color: white;
    width: 95%;
    font-weight: 10;
    letter-spacing: 0.125rem;
    margin-bottom: 7%;
    opacity: 0.8;
  }

  .breed-second img {
    margin-top: 5%;
    border-radius: 10px 10px;
    width: 580px;
    height: 430px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .btn {
    text-transform: uppercase;
    background: #fff;
    color: #222;
    letter-spacing: 0.125rem;
    display: inline-block;
    font-weight: 800;
    transition: all 0.2s linear;
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin: 10px;
    width: 60%;
    border: 1px solid silver;
  }

  @media screen and (max-width: 1295px) {
    .breed-head {
      height: auto;
      margin-bottom: 5%;
    }

    .breed-body {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      place-items: center;
      width: 90%;
    }

    .breed-second img {
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    .bread-first h3 {
      font-size: 0.8rem;
    }

    .breed-first h1 {
      font-size: 1.1rem;
    }

    .breed-first p {
      font-size: 0.7rem;
      width: 100%;
    }

    .breed-second img {
      height: 300px;
    }
  }

  @media screen and (max-width: 325px) {
    /* .breed-second img {
      width: 250px;
      margin: 0 auto;
    } */
  }
`;

export default Breed;
