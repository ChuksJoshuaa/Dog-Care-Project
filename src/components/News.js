import React from "react";
import styled from "styled-components";

const News = () => {
  return (
    <Wrapper>
      <div className="cent">
        <div className="section-cent" data-aos={"fade-right"}>
          <h3>Subscribe to our newsletter and get 20% off</h3>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              nihil, nemo quisquam ratione ad ipsa amet et deserunt tempore
              repudiandae?
            </p>
            <form
              className="contact-form"
              action="https://formspree.io/f/mdobgawb"
              method="POST"
            >
              <input
                type="email"
                className="form-input"
                placeholder="enter email"
                name="_replyto"
              />
              <button type="submit" className="submit-btn">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .cent {
    background: #fff;
    width: 100%;
    margin-bottom: 2%;
    height: 190px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .section-cent {
    width: 90vw;
    margin: 0 auto;
    max-width: 1200px;
  }
  .section-cent h3 {
    font-family: "Racing Sans One", cursive;
    color: crimson;
    text-transform: none;
    margin-top: 2rem;
  }
  .content p {
    line-height: 2;
    max-width: 45em;
    color: #222;
    font-family: "Rajdhani", sans-serif;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #222;
  }
  .form-input {
    border-right: none;
    color: crimson;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .submit-btn {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .form-input::placeholder {
    color: #222;
    text-transform: capitalize;
  }
  .submit-btn {
    background: crimson;
    text-transform: capitalize;
    letter-spacing: 0.125rem;
    cursor: pointer;
    transition: all 0.2s linear;
    color: #fff;
  }
  .submit-btn:hover {
    color: #fff;
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 2.5rem 0;
  }

  @media screen and (max-width: 640px) {
    .cent {
      height: auto;
      margin-bottom: 3rem;
    }

    .section-cent h3 {
      font-size: 1.2rem;
    }

    .content p {
      font-size: 0.9rem;
    }

    .form-input,
    .submit-btn {
      font-size: 0.6rem;
      padding: 0.5rem 0.5rem;
      border: 1px solid #222;
    }
  }

  .butt {
    text-transform: uppercase;
    background: #fff;
    color: var(--clr-primary-9);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
`;

export default News;
