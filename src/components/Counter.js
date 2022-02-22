import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const Counter = () => {
  return (
    <Wrapper>
      <div className="section-head">
        <div className="section-body">
          <div className="section-first">
            <h4>
              SOME STATISTICS
              <FaCheck />
              ABOUT US
            </h4>
            <h1>DOGGO CARE SERVICES</h1>
            <h2>YOU MUST KNOW</h2>
          </div>
          <div className="section-second">
            <div className="counter-container">
              <div className="counter-cell">
                <div
                  data-purecounter-start="0"
                  data-purecounter-end="30"
                  data-purecounter-duration="20"
                  className="purecounter"
                >
                  1
                </div>
                <span style={{ marginLeft: "1em" }}></span>
                <div className="counter-info">
                  YEARS OF <br />
                  <span> EXPERIENCE</span>
                </div>
              </div>
              <div className="counter-cell">
                <div
                  data-purecounter-start="0"
                  data-purecounter-end="300"
                  data-purecounter-duration="18"
                  className="purecounter"
                >
                  1
                </div>
                <span style={{ marginLeft: "1em" }}></span>
                <div className="counter-info">
                  DOCTORS & <br />
                  <span> WORKERS</span>
                </div>
              </div>
              <div className="counter-cell">
                <div
                  data-purecounter-start="0"
                  data-purecounter-end="5000"
                  data-purecounter-duration="15"
                  className="purecounter"
                >
                  1
                </div>
                <span style={{ marginLeft: "1em" }}></span>
                <div className="counter-info">
                  SATISFIED <br />
                  <span> CUSTOMERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 0.1px;
  .section-head {
    margin-top: 5%;
    height: 380px;
    background: #292a2e;
    width: 100%;
  }

  .section-body {
    max-width: 1200px;
    width: 95vw;
    margin: 0 auto;
  }

  .section-first {
    display: grid;
    text-align: center;
  }

  .section-first h4 {
    margin-top: 3em;
    font-size: 1.4em;
    letter-spacing: 0.125rem;
    font-weight: 500;
    text-align: center;
    color: #fff;
    font-family: "Cormorant Garamond", serif;
  }

  .section-first h1 {
    font-size: 2em;
    letter-spacing: 0.125rem;
    font-weight: 900;
    text-align: center;
    color: #fff;
    font-family: "Cormorant Garamond", serif;
  }

  .section-first h2 {
    font-size: 1.9em;
    letter-spacing: 0.125rem;
    font-weight: 900;
    text-align: center;
    color: #fff;
    font-family: "Cormorant Garamond", serif;
  }

  .counter-container {
    margin-top: 1.2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .counter-cell {
    display: flex;
    margin: 10px;
    margin-left: 2em;
  }

  .counter-cell .purecounter {
    font-size: 3em;
    letter-spacing: 0.125rem;
    font-weight: 900;
    text-align: center;
    color: crimson;
    font-family: "Amiri", serif;
  }

  .counter-cell .counter-info {
    font-size: 1.5em;
    letter-spacing: 0.125rem;
    font-weight: 500;
    text-align: center;
    color: white;
    font-family: "Rajdhani", sans-serif;
    margin-right: 1em;
  }

  .counter-info span {
    font-weight: 900;
    color: white;
    font-family: "Rajdhani", sans-serif;
  }

  @media screen and (max-width: 1009px) {
    .section-head {
      height: auto;
    }

    .section-first h1 {
      font-size: 2rem;
      font-weight: 600;
    }

    .section-first h2 {
      font-size: 1.7rem;
    }

    .counter-container {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  @media screen and (max-width: 642px) {
    .counter-container {
      text-align: center;
      place-items: center;
    }

    .counter-cell {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .section-first h1 {
      font-size: 1.7rem;
    }

    .section-first h2 {
      font-size: 1.4rem;
    }

    .counter-cell .counter-info {
      font-size: 1.3rem;
    }
  }
`;

export default Counter;
