import React from "react";
import {  Description, Hide } from "../../styles";
import styled from "styled-components";
import brand_design_1 from "../../img/Services__Page-Images/brand_design_1.png";
import draw_art from "../../img/Services__Page-Images/draw_art.png";
import hold__paint from "../../img/Services__Page-Images/hold__paint.png";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../animation";
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const BrandDesign = () => {
  const [element, controls] = useScroll();

  return (
    <StyledServices
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <ServicesDescription>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Brand Design</motion.h2>
          </Hide>
        </motion.div>
        <Hide>
          <motion.h4 variants={fade}>We get you ready for the market</motion.h4>
        </Hide>
        <Hide>
          <motion.p variants={fade}>
            We obsess over every pixel we put on screen. We have a team of
            passionate designers who care deeply about even the smallest design
            detail.
          </motion.p>
        </Hide>
      </ServicesDescription>
      <ImageDiv>
        <motion.img
          variants={photoAnim}
          src={brand_design_1}
          alt="guy with a camera"
        />
        <motion.img src={hold__paint} alt="guy with a camera" />
        <motion.img
          variants={photoAnim}
          src={draw_art}
          alt="guy with a camera"
        />
      </ImageDiv>
    </StyledServices>
  );
};

//Styped components

const StyledServices = styled(motion.div)`
  justify-content: center;
  flex-direction: column;
  background: #000;
  height: 110vh;
  display: flex;
  align-items: center;
  padding: 5rem 10rem 5rem 11rem;

  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }

  @media (max-width:768px) {
    height: 75vh;
  }
`;
const ServicesDescription = styled(Description)`
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 3rem 10rem 3rem 10.5rem;

  h2 {
    color: #fff;
    text-align: center;
    font-family: "Baloo 2", cursive;
    font-size: 3.45455rem;
    font-style: normal;
    font-weight: 600;
    line-height: 123.2%; /* 6.72rem */
  }
  h4 {
    color: #d9d9d9;
    font-family: "Baloo 2", cursive;
    font-size: 2.23636rem;
    font-style: normal;
    font-weight: 400;
    line-height: 123.2%; /* 4.48rem */
  }
  p {
    width: 70%;
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

  @media (max-width:768px) {
    padding: 3rem 1rem; 
    h2{
      font-size: 2.45455rem;
    }
    p{
      width: 100%;
      text-align: justify;
    }
  }
`;

const ImageDiv = styled.div`
  z-index: 2;
  overflow: hidden;
  display: grid;
  grid-template-columns: 69% 29.9%;
  height: 80vh;
  gap: 1rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;

    &:nth-child(1) {
      grid-row: 1/3;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 69% 26.9%;
    height: 30vh;
  }
`;
export default BrandDesign;
