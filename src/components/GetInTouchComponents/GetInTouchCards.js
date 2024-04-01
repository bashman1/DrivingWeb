import React from "react";
import { About, Description } from "../../styles";
import styled from "styled-components";

//Framer Motion
import { motion } from "framer-motion";
import { fade } from "../../animation";

// animations
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

// components
import ContactInfo from "./ContactInfo";
import OurOffices from "./OurOffices";

// data
import { GetInTouchHeaderData } from "../../data";

const GetInTouchCards = () => {
  const [element, controls] = useScroll();
  const headerDataArr = GetInTouchHeaderData();

  return (
    <>
      <StyledGetInTouchCards
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <StyledDescription className="d_flex_row flex_wrap justify_content_center col_gap_1  m_auto">
          {headerDataArr &&
            headerDataArr.map((card) => (
              <GetInTouchCard {...card} key={card.id} />
            ))}
        </StyledDescription>
      </StyledGetInTouchCards>
      <ContactInfo />
      <OurOffices />
    </>
  );
};

const GetInTouchCard = (props) => {
  let { title, description, button_text } = props;

  return (
    <StyledCard className="d_flex_column flex_1 row_gap_3 bg_color_secondary p_1 px_5 py_2 border_radius_sm">
      <div className="GetInTouch_top d_flex_column row_gap_2 align_items_center flex_1 m_auto">
        <div className="circle"></div>
        <h2 className="title text_left">{title}</h2>
        <p className="description content text_center">{description}</p>
      </div>

      <div className="GetInTouch_bottom  flex_1 w_60 m_auto">
        <motion.button className="secondary_btn no_wrap" variants={fade}>
          {button_text}
        </motion.button>
      </div>
    </StyledCard>
  );
};

//Styped components
const StyledGetInTouchCards = styled(About)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: #000;
  margin-top: 1rem;
  min-height: 70vh;
  padding: 4rem 11rem;
  color: white;
  row-gap: 1rem;
  width: 100%;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const StyledDescription = styled(Description)`
  @media (max-width: 1300px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    row-gap: 1rem;
  }
`;

const StyledCard = styled(motion.div)`
  flex: 1 0 17rem;

  @media (max-width: 768px) {
    padding: 1rem !important;
    row-gap: 1rem;
    .w_60 {
      width: 100% !important;
    }
    .text_left {
      text-align: center !important;
    }
  }
`;
export default GetInTouchCards;
