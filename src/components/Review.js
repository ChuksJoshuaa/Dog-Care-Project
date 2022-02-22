import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "../review";
import dog from "../static/images/dog99.jpg";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const checkPerson = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkPerson(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkPerson(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkPerson(randomNumber));
  };
  return (
    <Wrapper>
      <div className="review-head">
        <article className="review" data-aos={"zoom-in-left"}>
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomPerson}>
            surprise me
          </button>
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 5%;
  margin-top: 5%;
  .review-head {
    min-height: 600px;
    background: linear-gradient(rgba(63, 208, 212, 0.4), rgba(0, 0, 0, 0.7)),
      url(${dog}) center/cover no-repeat;
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
  }
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  .container {
    width: 80vw;
    max-width: var(--fixed-width);
  }
  .review {
    background: var(--clr-white);
    max-width: 800px;
    width: 90%;
    padding: 1.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    text-align: center;
  }
  .review:hover {
    box-shadow: var(--dark-shadow);
  }
  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  .person-img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }
  .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
  .img-container::before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
  .author {
    margin-bottom: 0.25rem;
    font-family: "Rajdhani", sans-serif;
    text-transform: uppercase;
  }
  .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
    font-family: "Rajdhani", sans-serif;
  }
  .info {
    margin-bottom: 0.75rem;
    font-family: "Rajdhani", sans-serif;
  }
  .prev-btn,
  .next-btn {
    color: var(--clr-primary-7);
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: var(--clr-primary-5);
  }
  .random-btn {
    margin-top: 0.5rem;
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
    padding: 0.25rem 0.5rem;
    font-family: "Rajdhani", sans-serif;
    text-transform: capitalize;
    border-radius: var(--radius);
    transition: var(--transition);
    border-color: transparent;
    cursor: pointer;
  }
  .random-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
  }
`;

export default Review;
