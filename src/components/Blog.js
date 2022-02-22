import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaClock, FaUsers } from "react-icons/fa";
import slugify from "slugify";

const Blog = ({ id, name, desc, Read, Date, image }) => {
  const slug = slugify(name);
  //Remove the slug url dash and convert it to sting
  // slug = slug.replace(/-/g, " ");
  return (
    <Wrapper>
      <div className="section-container">
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
          rel="stylesheet"
        ></link>
        <div className="section-head" data-aos={"zoom-in"}>
          <div>
            <img src={image} alt={name} />
          </div>
          <h1>{name}</h1>
          <h2>
            {`${desc.length > 189 ? desc.substring(0, 189) : desc}`}
            <span>
              <Link to={`/blogs/${slug}`}>Read more</Link>
            </span>
          </h2>
          <p>
            <FaUsers /> {Read} People | <FaClock /> {Date}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .section-head {
    overflow-x: hidden;
    border: 1px solid silver;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .section-head img {
    width: 400px;
    height: 250px;
    margin-bottom: 3%;
  }

  .section-head h1 {
    margin: 10px;
    text-align: left;
    font-size: 1.3rem;
    letter-spacing: 0.125rem;
    font-weight: 600;
    color: ash;
    font-family: "Rajdhani", sans-serif;
    text-transform: uppercase;
  }

  .section-head h2 {
    margin: 10px;
    font-size: 0.9rem;
    letter-spacing: 0.125rem;
    font-weight: 100;
    color: #222;
    font-family: "Rajdhani", sans-serif;
  }

  .section-head p {
    margin: 10px;
    font-size: 0.8rem;
    letter-spacing: 0.125rem;
    font-weight: 200;
    color: crimson;
    font-family: "Rajdhani", sans-serif;
  }
  @media screen and (max-width: 1311px) {
    .section-head img {
      width: 100%;
    }
  }

  @media screen and (max-width: 784px) {
    .section-head h2 {
      font-size: 0.8rem;
    }

    .section-head h1 {
      font-size: 0.9rem;
    }

    .section-head p {
      font-size: 0.7rem;
    }
  }
`;

export default Blog;
