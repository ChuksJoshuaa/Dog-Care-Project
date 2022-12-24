import React from "react";
import styled from "styled-components";
import dog from "../utils/images/dog3.jpg";

const Aboutpage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={dog} alt="shaving" data-aos={"zoom-in-right"} />
        <article data-aos={"zoom-in-left"}>
          <div className="title">
            <h2>History</h2>
          </div>
          <p>
            Paleontologists and archaeologists have determined that about 60
            million years ago a small mammal, rather like a weasel, lived in the
            environs of what are now parts of Asia. It is called Miacis, the
            genus that became the ancestor of the animals known today as canids:
            dogs, jackals, wolves, and foxes. Miacis did not leave direct
            descendants, but doglike canids evolved from it. By about 30 to 40
            million years ago Miacis had evolved into the first true dog—namely,
            Cynodictis. This was a medium-size animal, longer than it was tall,
            with a long tail and a fairly brushy coat. Over the millennia
            Cynodictis gave rise to two branches, one in Africa and the other in
            Eurasia. The Eurasian branch was called Tomarctus and is the
            progenitor of wolves, dogs, and foxes.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  section {
    padding: 5rem 0;
  }
  .page {
    min-height: calc(100vh - (20vh + 10rem));
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    height: 480px;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #222;
    font-family: "Rajdhani", sans-serif;
  }
  .title {
    text-align: left;
    font-size: 1rem;
    letter-spacing: 0.125rem;
    font-weight: 600;
    color: crimson;
    font-family: "Rajdhani", sans-serif;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    img {
      height: 300px;
    }

    .title {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export default Aboutpage;
