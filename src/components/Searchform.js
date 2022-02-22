import React, { useEffect } from "react";
import styled from "styled-components";
import { useDoggoContext } from "../contexts/dogs_context";
// import { useGlobalContext } from "../contexts/search_context";

const Searchform = () => {
  const { setSearchTerm, searchTerm } = useDoggoContext();
  const searchValue = React.useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchDog() {
    setSearchTerm(searchValue.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Wrapper>
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="labell">
              search your favourite dog breed
            </label>
            <input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
              onChange={searchDog}
            />
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 3%;

  .section {
    padding: 4rem 0;
    height: 300px;
  }

  .search {
    margin-top: rem;
    padding-bottom: 0;
  }

  .form-control {
    border: none;
    background: transparent;
  }
  .search-form {
    width: 85vw;
    margin: 0 auto;
    max-width: 40rem;
    height: 150px;
    background: white;
    padding: 1.8rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  }

  .form-control label {
    display: block;
    margin-bottom: 0rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: crimson;
    font-family: "Rajdhani", sans-serif;
    padding: 1 0.3rem;
    margin-bottom: 2%;
  }

  .form-control input {
    width: 100%;
    border: none;
    border-color: transparent;
    background: #f1f5f8;
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 5%;

    .section {
      height: auto;
      margin-bottom: 10%;
    }
  }

  @media screen and (max-width: 380px) {
    .search-form {
      height: 180px;
    }
  }
`;

export default Searchform;
