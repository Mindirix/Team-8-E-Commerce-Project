import React, { useState } from "react";
import people from "../assets/people_reviews";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  function checkIndex(num) {
    if (num < 0) {
      return people.length - 1;
    } else if (num === people.length) {
      return 0;
    } else {
      return num;
    }
  }

  function prevButton() {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  }
  function nextButton() {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  }

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    console.log(randomIndex);
    setIndex(checkIndex(randomIndex));
  };

  return (
    <Wrapper>
      <section className="section-center">
        <article className="review">
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
            <button className="prev-btn" onClick={prevButton}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextButton}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomReview}>
            suprise me
          </button>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .section {
    width: 50vw;
    margin: 0 auto;
    max-width: 800px;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .container {
    width: 100vw;
    max-width: 620px;
  }
  .section-center {
    background: transparent;
  }
  .review {
    width: 100%;
    background: #fff;
    padding: 3rem 10rem;
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    .review {
      width: 95vw;
      padding: 1rem;
    }
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
    background: #f96a05;
    color: #fff;
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
    text-transform: capitalize;
  }
  .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: #f96a05;
    font-size: 0.85rem;
  }
  .info {
    margin-bottom: 0.75rem;
    padding: 0 10rem;
  }

  @media screen and (max-width: 992px) {
    .info {
      margin-bottom: 0.75rem;
      padding: 0 2rem;
    }
  }
  .prev-btn,
  .next-btn {
    color: #f96a05;
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: #f96a05;
  }
  .random-btn {
    margin-top: 0.5rem;
    background: #f0f2f5;
    color: #f96a05;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
    border-color: transparent;
    cursor: pointer;
  }
  .random-btn:hover {
    background: #f96a05;
    color: #f0f2f5;
  }
`;

export default Review;
