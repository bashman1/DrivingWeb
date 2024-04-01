import React from "react";
import studio_space from "../../img/aboutUsPageImgs/studio_space.jpeg";
import styled from "styled-components";
import { Description, Hide, Ellipse } from "../../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../animation";

const StudioSpace = () => {
  return (
    <StyledAbout className="bg_black card__height">
      <StudioEllipse />
      <AboutDescription>
        <motion.div className="aboutHeader">
          <Hide>
            <motion.h2 variants={titleAnim}>Studio Space</motion.h2>
          </Hide>
          <Hide>
            <motion.p variants={titleAnim}>
              because not everything is communicated with brochures.
            </motion.p>
          </Hide>
        </motion.div>
        <AboutHide>
          <motion.button variants={fade}>Explore</motion.button>
          <motion.button variants={fade}>Get quote</motion.button>
        </AboutHide>
      </AboutDescription>
      <AboutUsImage>
        <motion.img
          variants={photoAnim}
          src={studio_space}
          alt="guy with a camera"
        />
      </AboutUsImage>
    </StyledAbout>
  );
};

//Styled Components
const StyledAbout = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  position: relative;
  padding: 0rem;
  background: #000;
  overflow: hidden;
  margin-top: 1rem;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 0.3rem;
    height: 45vh;

    h2 {
      font-size: 2.5rem;
      padding: 1rem 0 1rem 0;
      white-space: nowrap;
    }
  }
`;

const StudioEllipse = styled(Ellipse)`
  top: 30%;
  width: 60.273rem;

  @media (max-width: 768px) {
    background: #0101013d;
  }
`;
const AboutDescription = styled(Description)`
  position: absolute;
  top: 17rem;
  left: 50%;
  transform: translate(-50%, -80%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  .aboutHeader {
    h2 {
      text-align: center;
      font-family: "Baloo 2", cursive;
      color: #fff;
      text-align: center;
      font-family: "Baloo 2", cursive;
      font-size: 5.27273rem;
      font-style: normal;
      font-weight: 500;
      line-height: 100.2%; /* 6.70545rem */
      white-space: nowrap;
    }
    p {
      margin: 1rem 0 0 0;
    }

    @media (max-width: 768px) {
      top: 18rem;
      row-gap: 0.5rem;
      h2 {
        font-size: 3rem;
        padding: 0;
      }
      p {
        margin: 0;
      }
    }
  }

  @media (max-width: 768px) {
      top: 18rem;
      row-gap: 0.5rem;
      .aboutHeader {
        h2 {
        font-size: 3rem;
        padding: 0;
      }
      p {
        margin: 0;
      }
      }
     
    }
`;
const AboutUsImage = styled(motion.div)`
  width: 100%;
  height: 100%;

  z-index: 2;
  flex: 1;
  overflow: hidden;
  transform: scale(1.1);

  img {
    width: 98%;
    height: 100%;
    margin: 0 1% 0 1%;
    object-fit: cover;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {

  }
`;

const AboutHide = styled(Hide)`
  display: flex;
  column-gap: 1rem;

  button {
    padding: 1rem 4rem;

    &:nth-child(1) {
      border-radius: 0.70909rem;
      background: #ffcc0a;
      color: #000000;
    }
    &:nth-child(2) {
      border-radius: 0.70909rem;
      border: 2px solid #ffcc0a;
      color: #ffffff;
    }
    @media (max-width: 768px) {
      margin: 0rem 0rem 8rem 0rem !important;
    }
  }
`;
export default StudioSpace;
