import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../utils/images/logo.jpg";
import { FaFax, FaHome, FaAnchor, FaDog, FaBook } from "react-icons/fa";
const Navbar = () => {
  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      ></link>
      <header role="banner" id="nav">
        <nav className="navbar navbar-expand-md navbar-grey bg-dark">
          <div className="container">
            <Link to="/">
              <img
                className="image-top"
                src={logo}
                style={{ width: "50px" }}
                alt="logo"
              />
              <span className="spanner">
                Dog<span style={{ color: "red" }}>go</span>
              </span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <Link className="nav-link navy" to="/">
                    <FaHome />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navy" to="/about">
                    <FaAnchor />
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navy" to="/dog">
                    <FaDog />
                    Dog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navy" to="/blog">
                    <FaBook />
                    Blog
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item ">
                  <Link className="nav-link navy" to="/contact">
                    <FaFax />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .spanner {
    font-family: "Great Vibes", cursive;
    font-size: 2.5rem;
    color: white;
  }

  .navy {
    color: white;
    font-family: "Rajdhani", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export default Navbar;
