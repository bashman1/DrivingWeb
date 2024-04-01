import React from "react";
//Import Icons
import product_design from "../../img/aboutUsPageImgs/product_design.png";
import digital_marketing from "../../img/aboutUsPageImgs/digital_marketing.png";
import brand_design from "../../img/aboutUsPageImgs/brand_design.png";


import { motion } from "framer-motion";
//Styles
import { Description, CardBottomText} from "../../styles";
import styled from "styled-components";
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const AboutServices = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledAboutServices>
        <h2>
          Our Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={brand_design} />             
            </div>   
            <CardBottomText >
                <h3>Brand Design</h3>
                <p className="text__color">We have put a number of corporate brands into a better market position simply by the revamping them.</p>
            </CardBottomText>        
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={product_design} />             
            </div>   
            <CardBottomText>
                <h3>Product Design</h3>
                <p className="text__color">We have put a number of corporate brands into a better market position simply by the revamping them.</p>
            </CardBottomText>        
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={digital_marketing} />
            </div>
            <CardBottomText>
                <h3>Digital Marketing</h3>
                <p className="text__color">We have put a number of corporate brands into a better market position simply by the revamping them.</p>
            </CardBottomText>
          </Card>
         
        </Cards>
      </StyledAboutServices>    
    </Services>
  );
};

const Services = styled(motion.div)`
 min-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top:1rem;
  color: white;
  h2 {
    padding-bottom: 4rem;
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
   
  @media (max-width: 768px) {
    padding: 0rem 0rem;
    margin-top: .3rem;
    min-height: 50vh;
    h2 {
      font-size: 2.5rem;
      padding: 1rem 0 1rem 0;
      white-space: nowrap;
    }
  }
`;

const StyledAboutServices = styled(Description)`
  height: 100%;
  background: #000;
  width:100%;
  padding: 5rem 10rem 5rem 11rem;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    min-height: 50vh;
    
  }
`
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
    min-height: 40vh;
    align-items: flex-start;
  }
`;
const Card = styled.div`
flex: 1 0 25rem;
  position: relative;
  height: 40vh;
  
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }

  @media (max-width: 768px) {
   max-height: 27vh;
   flex: 1 0 22rem;
  }
`;

export default AboutServices;
