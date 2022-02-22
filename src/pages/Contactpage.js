import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const Contactpage = () => {
  const [state, handleSubmit] = useForm("mvolalzq");
  if (state.succeeded) {
    return (
      <p style={{ height: "100vh", textAlign: "center", marginTop: "5%" }}>
        Your message has been sent successfully!{" "}
        <span>
          <Link to="/" className="btn btn-secondary">
            Back Home
          </Link>
        </span>
      </p>
    );
  }
  return (
    <main>
      <Wrapper>
        <div>
          <h1 style={{ marginBottom: "3%" }}></h1>
          <div className="both container">
            <form onSubmit={handleSubmit}>
              <fieldset className="field">
                <div className="join">Contact form</div>
                <div className="form-group1">
                  <label htmlFor="email" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="email" className="col-form-label">
                    Phone:
                  </label>
                  <input type="text" name="phone" className="form-control" />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="email" className="col-form-label">
                    Message:
                  </label>
                  <textarea name="message" className="form-control"></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="sign-in">
                  <button
                    type="submit"
                    className="btn btn-primary butty"
                    disabled={state.submitting}
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  margin-bottom: 5%;
  .field {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1px solid silver;
    width: 50%;
    position: relative;
    top: 20%;
    left: 20%;
    margin: 10px;
    padding: 1em 2em;
    font-size: 0.8em;
    text-align: stretch;
    background: white;
  }

  .join {
    background: rgba(220, 20, 60, 0.6);
    text-transform: uppercase;
    font-family: "Amiri", serif;
    font-weight: bold;
    font-size: 1.4em;
    font-weight: 800;
    text-align: center;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .form-group1 {
    margin-bottom: 0.5rem;
  }

  .butty {
    background: rgba(220, 20, 60, 0.6);
    border: 1px solid silver;
    font-family: "Amiri", serif;
  }

  @media screen and (max-width: 1050px) {
    .field {
      width: 80%;
      left: 10%;
    }
  }

  @media screen and (max-width: 650px) {
    .field {
      width: 90%;
      left: 0%;
    }
  }
`;

export default Contactpage;
