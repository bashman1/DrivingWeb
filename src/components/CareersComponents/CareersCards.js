import React from "react";
import { About, Description } from "../../styles";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import { fade } from "../../animation";

import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const CareersCards = () => {
  const [element, controls] = useScroll();

  return (
    <StyledCareersCards
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <CareersCardsDescription>
        <CareersCard />
        <CareersCard />
        <CareersCard />
        <CareersCard />
        <CareersCard />
        <CareersCard />
      </CareersCardsDescription>
    </StyledCareersCards>
  );
};

const CareersCard = () => {
  return (
    <motion.div className="careers_card d_flex_column row_gap_3 bg_color_secondary p_1 py_2 border_radius_sm">
      <div className="careers_top d_flex_column row_gap_2 flex_1  ">
        <h2 className="title text_left">Digital Marketing Manager</h2>
        <div className="card_subtitle d_flex_row justify_content_space_between text_left w_100">
          <h4 className=" job_location flex_1">Remote</h4>
          <span className="your_origin flex_1">Uganda</span>
        </div>
        <p className="description content text_justify">
          We strive to present our clients’ ideas in the most useful way
          possible thereby creating value for them.{" "}
        </p>
      </div>

      <div className="careers_bottom d_flex_row justify_content_center align_items_end  flex_1 w_100">
        <motion.button className="secondary_btn" variants={fade}>
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

//Styped components
const StyledCareersCards = styled(About)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: #000;
  margin-top: 1rem;
  min-height: 100vh;
  padding: 4rem 10rem 4rem 11.5rem;
  color: white;
  row-gap: 1rem;
  width: 100%;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const CareersCardsDescription = styled(Description)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  width: 100%;
  margin: 0 auto;
  grid-gap: 1rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
  .careers_card {
    height: 27rem;
  }
  .uncompleted {
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #0b0b0b;
  }

  h4 {
    color: #d9d9d9;
    font-family: "Baloo 2", cursive;
    font-style: normal;
    font-weight: 400;
    line-height: 123.2%; /* 4.48rem */
  }
  p {
    height: 6.09091rem;
    flex-shrink: 0;
    margin: 0 auto;

    color: #949494;
    text-align: center;
    font-family: "Baloo 2", cursive;
    font-size: 1.16364rem;
    font-style: normal;
    font-weight: 400;
    line-height: 123.2%; /* 2.912rem */
  }
.secondary_btn{
  border: 2px solid #ffcc0a12;
}
  @media (max-width: 768px) {
    .row_gap_3 {
      row-gap: 0rem;
    }
    .careers_card {
    min-height: 25rem;
  }
  .secondary_btn{
  margin: 0rem;
}
  }
`;

export default CareersCards;
