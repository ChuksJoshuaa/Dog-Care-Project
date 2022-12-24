import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import slugify from "slugify";
import styled from "styled-components";
import { data } from "../utils/tools";
import { FaUsers, FaClock } from "react-icons/fa";
const SingleBlog = () => {
  const [datas, _setDatas] = useState(data);
  const { slug } = useParams();
  const instance = datas.filter((item) => slugify(item.name) === slug);
  return (
    <Wrapper>
      <div>
        <div>
          {instance.map((come) => {
            const {
              name,
              Date,
              Read,
              blogDesc,
              blogIdea,
              blogTitle,
              id,
              image,
              info,
              desc,
            } = come;
            return (
              <div key={id}>
                <div className="blog-head">
                  <h1 style={{ marginBottom: "0", visibility: "hidden" }}>
                    yes
                  </h1>
                  <h1>{name}</h1>
                  <p>
                    <FaUsers /> {Read} People | <FaClock /> {Date}
                  </p>
                </div>
                <div className="blog-body">
                  <img src={image} alt={name} />
                  <h2>{info}</h2>
                  <h3>{blogTitle}</h3>
                  <p style={{ marginBottom: "3%" }}>{blogDesc}</p>
                  <h3>{blogIdea}</h3>
                  <p>{desc}</p>
                  <Link
                    to="/blog"
                    className="btn btn-secondary butt"
                    style={{ marginTop: "1%" }}
                  >
                    Back To Blog
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 5%;

  .blog-head {
    height: 150px;
    background: rgba(217, 214, 208, 0.3);
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

    h1 {
      /* margin-bottom: 5px; */
      margin-right: 10px;
      font-size: 2.5rem;
      letter-spacing: 0.125rem;
      text-align: center;
      font-weight: 500;
      color: #222;
      font-family: "Rajdhani", sans-serif;
      text-transform: uppercase;
      margin-bottom: 0;
    }

    p {
      margin-top: 0;
      margin: 10px;
      text-align: center;
      font-size: 0.8rem;
      letter-spacing: 0.125rem;
      font-weight: 500;
      color: crimson;
      font-family: "Rajdhani", sans-serif;
    }
  }

  .blog-body {
    max-width: 980px;
    width: 90vw;
    margin: 0 auto;

    img {
      width: 100%;
      height: 500px;
      margin-bottom: 1%;
    }

    h2 {
      margin-top: 1%;
      font-size: 1.5rem;
      letter-spacing: 0.125rem;
      font-weight: 500;
      color: #222;
      font-family: "Rajdhani", sans-serif;
      margin-bottom: 3%;
    }

    h3 {
      text-transform: uppercase;
      letter-spacing: 0.125rem;
      font-weight: 700;
      color: crimson;
      font-family: "Rajdhani", sans-serif;
      font-size: 1.2rem;
    }

    p {
      margin: 10px;
      margin-left: 0;
      font-size: 0.8rem;
      letter-spacing: 0.125rem;
      font-weight: 500;
      color: #222;
      font-family: "Rajdhani", sans-serif;
    }

    .butt {
      font-family: "Rajdhani", sans-serif;
    }
  }

  @media screen and (max-width: 1200px) {
    .blog-head {
      height: auto;
      margin-bottom: 2%;

      h1 {
        font-size: 2rem;
      }
    }

    .blog-body {
      h2 {
        font-size: 1.2rem;
      }

      h3 {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .blog-body {
      img {
        height: 300px;
        margin-top: 2%;
      }
    }
  }

  @media screen and (max-width: 380px) {
    .blog-head {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default SingleBlog;
