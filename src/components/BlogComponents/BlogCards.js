import React from "react";
import {  Description } from "../../styles";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import product_design from "../../img/aboutUsPageImgs/product_design.png";
import { CardBottomText } from "../../styles";
import { fade } from "../../animation";

import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const BlogCards = () => {
  const [element, controls] = useScroll();

  return (
    <StyledBlogCards
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <BlogCardsDescription>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </BlogCardsDescription>
    </StyledBlogCards>
  );
};

const BlogCard = () => {
  return (
    <Card>
      <div className="icon">
        <img alt="icon" src={product_design} />
      </div>
      <BlogCardText className="d_flex_column row_gap_1">
        <h3>Brand Design</h3>

        <p className="content text_left subheading_color">17 Mar, 2023</p>

        <p className="content text_left">
          We have put a number of corporate brands into a better market position
          simply by the revamping them.
        </p>

        <div className="careers_bottom  flex_1 w_60">
          <motion.button className="secondary_btn"  variants={fade}>Continue</motion.button>
      </div>
      </BlogCardText>
    </Card>
  );
};

//Styped components
const StyledBlogCards = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: #000;
  margin-top: 1rem;
  min-height: 100vh;
  padding: 4rem 10.5rem;
  color: white;
  row-gap: 1rem;
  width: 100%;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const BlogCardsDescription = styled(Description)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  width: 100%;
  margin: 0 auto;
  grid-gap: 1rem;
  min-height: 100%;

  @media (max-width: 1300px) {
    justify-content: center;
  }
 

  h4 {
    color: #d9d9d9;
    font-family: "Baloo 2", cursive;
    font-style: normal;
    font-weight: 400;
    line-height: 123.2%; /* 4.48rem */
  }
  p {
    font-family: "Baloo 2", cursive;
    font-size: 1.16364rem;
    font-weight: 400;
    line-height: 123.2%; /* 2.912rem */
  }
`;

const Card = styled.div`
  position: relative;
  margin-bottom: 11.5rem;
  height: 20rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
`;

const BlogCardText = styled(CardBottomText)`
  bottom: -11.5rem;

`

export default BlogCards;
