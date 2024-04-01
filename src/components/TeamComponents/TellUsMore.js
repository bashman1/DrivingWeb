import React from "react";
import {Description, Hide } from "../../styles";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../animation";

import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const TellUsMore = () => {
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
            Tell us about your project
            </motion.h2>
          </Hide>
        </motion.div>       
        <motion.p variants={fade}>
          We have put a number of corporate brands into  a better market position simply by the revamping them.
        </motion.p>
        <WorksHide>
          <motion.button variants={fade}>Get in touch</motion.button>          
        </WorksHide>
      </ServicesDescription>
    
    </StyledServices>
  );
};


//Styped components
const StyledServices = styled(motion.div)`
  justify-content: center;
  flex-direction: column;
  background: #000; 
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
  
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const WorksHide = styled(Hide)`
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    
    border-radius: 0.90909rem;
    border: 2px solid #FFCC0A;
    color: #FFF;
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-size: 1.27273rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    padding: 1rem 3rem;
  }

  @media (max-width:768px) {
  button{
    width: 100%;
  }
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
  p {
    width: 70%;
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
  @media (max-width: 768px) {
   h2{
    font-size: 2.45455rem;
   }
  }
`;

export default TellUsMore;