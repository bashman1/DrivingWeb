import React from "react";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import { Hide } from "../../styles";
import { titleAnim, fade } from "../../animation";
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const HowWeStarted = () => {
  const [element, controls] = useScroll();

  return (
    <StyledHowWeStarted
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <TextCard />
      <EmptyCard />
    </StyledHowWeStarted>
  );
};

const TextCard = () => {
  return (
    <div className="card d_flex_column txt_card">
      <Hide>
        <motion.h2 variants={titleAnim}>How We Started</motion.h2>
      </Hide>

      <motion.p variants={fade} className="content">
        We strive to present our clients’ ideas in the most useful way possible
        thereby creating value for them.
      </motion.p>
    </div>
  );
};

const EmptyCard = () => {
  return (
    <div className="card d_flex_column empty_card bg_color_secondary"></div>
  );
};
//Styped components
const StyledHowWeStarted = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #000;
  min-height: 70vh;
  margin-top: 1rem;
  padding: 3rem 10rem 3rem 10.5rem;

  color: white;
  flex-wrap: nowrap;
  column-gap: 2rem;

  .card {
    flex: 1 0 20rem;
    height: 27rem;

    .content {
      margin-top: 1rem;
    }
  }
  .txt_card {
    padding: 0 15rem 0 1rem;
    flex: 1;
  }
  .empty_card {
    border-radius: 2rem;
    flex: 2;
  }

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    min-height: 35vh;
    .card {
      height: 13rem;
      .content {
        text-align: left;
      }
    }
    .txt_card {
      padding: 0 0rem 0 1rem;
      flex: 1;
    }
  }
`;

export default HowWeStarted;
