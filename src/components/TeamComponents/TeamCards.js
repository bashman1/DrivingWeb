import React from "react";
import { Description } from "../../styles";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import { Hide } from "../../styles";
import { titleAnim, fade } from "../../animation";
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const TeamCards = () => {
  const [element, controls] = useScroll();

  return (
    <StyledTeamMate
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <TeamMateDescription>
        <TeamMateCard textPostion="right" />
        <TeamMateCard textPostion="left" />
        <TeamMateCard textPostion="right" />
      </TeamMateDescription>
    </StyledTeamMate>
  );
};

const TeamMateCard = (props) => {
  const { textPostion } = props;
  return (
    <StyledTeamContainer
      className={`${
        textPostion === "right" ? "uncompleted" : "uncompleted_text_left"
      }`}
    >
      <div className="inner"></div>
      <div className="inner">
        <motion.div
          className={`${
            textPostion === "right"
              ? "content_right content"
              : "content_left content"
          }`}
        >
          <motion.div>
            <Hide>
              <motion.h2 variants={titleAnim}>Nambwayo Mariam</motion.h2>
            </Hide>
          </motion.div>

          <motion.p variants={fade}>
            We strive to present our clients’ ideas in the most useful way
            possible thereby creating value for them. We strive to present our
            clients’ ideas in the most useful way possible thereby creating
            value for them. We strive to present our clients’ ideas in the most
            useful way possible thereby creating value for them.
          </motion.p>

          <TeamHide>
            <motion.button variants={fade}>Continue</motion.button>
          </TeamHide>
        </motion.div>
      </div>
    </StyledTeamContainer>
  );
};

//Styped components
const StyledTeamMate = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #000;
  min-height: 100vh;
  margin-top: 1rem;

  align-items: flex-start;
  padding: 3rem 10rem 3rem 11.5rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const TeamMateDescription = styled(Description)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 10rem;
  width: 100%;
  text-align: left;

  .uncompleted {
    position: relative;

    .inner {
      background: #0b0b0b;
      border-radius: 0.2rem;
      position: relative;
      overflow: visible;

      &:nth-child(2) {
        background: #000;
      }
    }
  }
  .uncompleted_text_left {
    .inner {
      flex: 1;
      background: #0b0b0b;

      position: relative;

      &:nth-child(1) {
        background: #000;
      }

      .content_left {
        position: absolute;
        top: 50%;
        left: -52%;
        transform: translate(-50%, -35%);

        p {
          width: 70%;
        }
      }
    }
  }

  h2 {
    color: #fff;
    font-family: "Baloo 2", cursive;
    font-size: 2.45455rem;
    font-style: normal;
    font-weight: 600;
    line-height: 123.2%; /* 6.72rem */
  }

  p {
    width: 90%;
    flex-shrink: 0;
    color: #949494;
    font-family: "Baloo 2", cursive;
    font-size: 1.16364rem;
    font-style: normal;
    font-weight: 400;
    line-height: 143.2%; /* 2.912rem */
    text-align: left;
  }

  @media (max-width: 768px) {
    .uncompleted_text_left {
      .inner {
        &:nth-child(1) {
          background: #0b0b0b;
        }
        &:nth-child(2) {
          background: #000;
        }
        .content_left {
          position: relative;
          top: 0%;
          left: 0%;
          transform: translate(0%, 0%);
          display: flex;
          align-items: center;

          p {
            width: 100%;
            text-align: justify;
          }
        }
      }
    }
  }
`;

const StyledTeamContainer = styled(motion.div)`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  .inner {
    height: 25rem;
    width: 100%;
    flex: 1;
    border-radius: 0.2rem;

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      row-gap: 1rem;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 60vh;

    .inner {
      .content_right {
        align-items: center;
      }
      p {
        width: 100%;
        text-align: justify;
      }
    }
  }
`;
const TeamHide = styled(Hide)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    border-radius: 0.90909rem;
    border: 2px solid #ffcc0a12;
    color: #fff;
    text-align: center;
    font-family: "Baloo 2", cursive;
    font-size: 1.27273rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    padding: 0.5rem 4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    button {
      width: 100%;
    }
  }
`;
export default TeamCards;
