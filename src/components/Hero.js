import React from "react";
import styled from "styled-components";
import image1 from "../static/images/dog22.webp";
import image2 from "../static/images/dog11.jpg";
import image3 from "../static/images/dog00.jpg";
import { FaOdnoklassniki } from "react-icons/fa";
import { FaRedhat } from "react-icons/fa";
import { FaStaylinked } from "react-icons/fa";

const Hero = () => {
  return (
    <Wrapper>
      <article>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          xmlns="http://www.w3.org/1999/html"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" id="home">
            <div className="carousel-item active">
              <img
                className="d-block w-100 h-100"
                style={{ height: "100%" }}
                src={image3}
                alt="First slide"
              />
              <div className="carousel-caption">
                <div data-aos={"fade-right"}>
                  <h1>
                    DOGS FILL OUR LIVES WITH JOY
                    <span style={{ fontSize: "2.4rem" }}>
                      <FaOdnoklassniki />
                    </span>
                  </h1>
                  <h2>Dog Care</h2>
                  <button className="butt">
                    <a href="/contact" style={{ color: "white" }}>
                      Get Appointment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 h-100"
                style={{ height: "100%" }}
                src={image2}
                alt="Second slide"
              />
              <div className="carousel-caption .d-xl-block d-block">
                <div data-aos={"fade-right"}>
                  <h1>
                    LEARN MORE ABOUT DOGS
                    <span style={{ fontSize: "2.4rem" }}>
                      <FaRedhat />
                    </span>
                  </h1>
                  <h2>Dog Blog</h2>
                  <button className="butt">
                    <a href="/contact" style={{ color: "white" }}>
                      Get Appointment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 h-100"
                style={{ height: "100%" }}
                src={image1}
                alt="Third slide"
              />
              <div className="carousel-caption .d-xl-block d-md-block">
                <div data-aos={"fade-right"}>
                  <h1>
                    WE TAKE CARE OF YOUR DOG
                    <span style={{ fontSize: "2.4rem" }}>
                      <FaStaylinked />
                    </span>
                  </h1>
                  <h2>Dog Shelter</h2>
                  <button className="butt">
                    <a href="/contact" style={{ color: "white" }}>
                      Get Appointment
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  letter-spacing: 0.125rem;
  margin-bottom: 3%;
  .carousel-item {
    height: 80vh;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .carousel-caption {
    max-width: 1290px;
    text-align: left;
    min-height: 65vh;
    line-height: 1.3rem;
  }

  .carousel-caption h1 {
    font-size: 1.7rem;
    font-weight: 200;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    color: #fff;
    font-family: "Rajdhani", sans-serif;
    margin-bottom: 3%;
  }

  .carousel-caption h2 {
    font-size: 70px;
    line-height: 60px;
    letter-spacing: 0.25rem;
    font-weight: 200;
    color: #fff;
    font-family: "Racing Sans One", cursive;
    margin-bottom: 5%;
  }

  .carousel-caption .butt {
    position: relative;
    z-index: 2;
    display: inline-block;
    padding: 9px 35px;
    text-align: center;
    font-size: 15px;
    text-transform: capitalize;
    letter-spacing: 0px;
    font-weight: 400;
    border: 2px solid #ffffff;
    border-radius: 30px;
    color: #ffffff;
    background: none;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
  }

  @media only screen and (max-width: 919px) {
    .carousel-item {
      height: 90vh;
    }

    .carousel-caption {
      margin-bottom: 5%;
    }

    .carousel-caption h2 {
      font-size: 65px;
      line-height: 60px;
      margin-top: 0px;
      margin-bottom: 5%;
    }
    .carousel-caption h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 420px) {
    .carousel-caption h2 {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 299px) {
    .carousel-caption h1 {
      font-size: 20px;
    }
    .carousel-caption h2 {
      font-size: 30px;
    }
  }
`;

export default Hero;
