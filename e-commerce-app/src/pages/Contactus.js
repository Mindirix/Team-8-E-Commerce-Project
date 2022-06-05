import React from "react";
import styled from "styled-components";

const Contactus = () => {
  return (
    <Contact>
      <main>
        <article>
          <div class="container">
            <form action="">
              <h1>Contact Us</h1>
              <div class="form-content">
                <label for="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div class="row">
                <div class="form-content">
                  <label for="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div class="form-content">
                  <label for="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone Number"
                  />
                </div>
              </div>
              <div class="form-content textarea">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div class="submit-btn">
                <button type="submit" id="submit">
                  Submit <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </form>
          </div>
        </article>
      </main>
    </Contact>
  );
};

const Contact = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: "Poppins", sans-serif;
  margin: 0;
  background-color: #e6e6e6;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #333333;

  article {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #e6e6e6;
  }

  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  h1 {
    display: block;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: 39px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 59px;
  }

  label {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 10px;
    color: #333333;
    line-height: 1.5;
    text-transform: uppercase;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: none;
    background-color: transparent;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #555555;
    line-height: 1.2;
    padding-right: 15px;
  }

  input {
    height: 40px;
  }
  input::placeholder,
  textarea::placeholder {
    color: #adadad;
  }

  input:focus {
    outline: none; /* Removes the border when the input is clicked */
  }
  textarea {
    background-color: transparent;
    resize: none;
    outline: none;
    height: 27px;
    min-height: 120px;
    padding-top: 9px;
    padding-bottom: 13px;
  }
  .container {
    width: 800px;
    background-color: #fff;
    border-radius: 40px;
    overflow: hidden;
    padding: 62px 55px 90px 55px;
    margin: 100px 0;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #e6e6e6;
    background-color: #f7f7f7;
    border-radius: 13px;
    padding: 10px 30px 9px 22px;
    margin-bottom: 20px;
  }
  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    --bs-gutter-x: 0;
  }

  .textarea {
    background-color: #fff;
  }

  .submit-btn {
    width: 100%;
  }
  .submit-btn button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    min-height: 50px;
    background-color: #333333;
    border-style: none;
    border-radius: 25px;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    transition: all 0.6s ease-in-out;
  }
  .submit-btn button:hover {
    background-color: #00ad5f;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    .row {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export default Contactus;
