import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <h1 className="error-title">404</h1>
        <div className="info">
          <h2>We can't find that page</h2>
          <p>
            We're fairly sure that page used to be here, but seems to have gone
            missing. We do apologise on it's behalf.
          </p>
          <Link to="/">
            <button type="button" className="start-btn error">
              HOME
            </button>
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .error-title {
    font-size: 7rem;
  }

  .start-btn.error {
    margin-top: 3rem;
    max-width: 200px;
  }
`;

export default Error;
