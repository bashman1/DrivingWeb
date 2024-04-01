import React from "react";
import {  Description, Hide } from "../../styles";
import styled from "styled-components";
import digital__marketing from "../../img/Services__Page-Images/digital__marketing.png";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../animation";

import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const DigitalMarketing = () => {
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
            <motion.h2 variants={titleAnim}>
              User Interface & Experience Design
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.h4 variants={fade}>All Screens. All Systems</motion.h4>
        <motion.p variants={fade}>
          We obsess over every pixel we put on screen. We have a team of
          passionate designers who care deeply about even the smallest design
          detail.
        </motion.p>
      </ServicesDescription>
      <ImageDiv>
        <motion.img
          variants={photoAnim}
          src={digital__marketing}
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
  min-height: 100vh;
  margin-top: 1rem;

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
    min-height: 60vh;
  }
`;
const ImageDiv = styled.div`
  z-index: 2;
  overflow: hidden;
  display: flex;
  height: 70vh;
  column-gap: 1.2rem;
  width: 100%;
  flex: 3;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;  
    flex: 1;
    
  }
  @media (max-width:768px) {
    height: 30vh;
  }
`;

const ServicesDescription = styled(Description)`
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
 

  h2 {
    color: #fff;
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-size: 3.45455rem;
    font-style: normal;
    font-weight: 600;
    line-height: 123.2%; /* 6.72rem */ 
  }
  h4 {
    color:  #d9d9d9;
    font-family: 'Baloo 2', cursive;
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
    font-family: 'Baloo 2', cursive;
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
      text-align:justify;
    }
  }
`;

export default DigitalMarketing;