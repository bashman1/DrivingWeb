import React from "react";
//Import Icons
import video_interviews from "../../img/aboutUsPageImgs/video_interviews.jpeg";
import product_launches from "../../img/aboutUsPageImgs/product_launches.jpeg";
import aboutUs1 from "../../img/about_us_1.png";

import { motion } from "framer-motion";
//Styles
import { Description, CardBottomText } from "../../styles";
import styled from "styled-components";
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const OurWorks = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledAboutServices className="about_service">
        <StyledWorksTop>
          <h2>Our Works</h2>
          <ul>
            <li>All Products</li>
            <li>Brand Design</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Studio Space</li>
          </ul>
        </StyledWorksTop>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={video_interviews} />
            </div>
            <StyledWorksCardBottom>
              <h3>Video Interviews</h3>
              <p className="text__color">Custom Quote</p>
            </StyledWorksCardBottom>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={aboutUs1} />
            </div>
            <StyledWorksCardBottom>
              <h3>Video Ads</h3>
              <p className="text__color">Custom Quote</p>
            </StyledWorksCardBottom>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={product_launches} />
            </div>
            <StyledWorksCardBottom>
              <h3>Product Launches</h3>
              <p className="text__color">Custom Quote</p>
            </StyledWorksCardBottom>
          </Card>
        </Cards>
      </StyledAboutServices>
    </Services>
  );
};

const Services = styled(motion.div)`
  min-height: 97vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  color: white;
 
  h2 {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding:0rem;
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
  width: 100%;
  padding: 5rem 10rem 5rem 11rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;
const StyledWorksTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    width: 50%;
    padding: 3rem 0;
    margin: 0 auto;

    li {
      flex: 1;
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    ul{
      flex-direction: column;
      width: 95%;
      margin: 0 auto;
      padding: 0;

      li{
        width: 100%;
        padding: 1rem 0;
        font-size: 1.8rem;
        color:#D9D9D9;

        &:nth-child(odd){
          background: #070707;
        }
        &:nth-child(even){
          background: #0B0B0B;        
        }
      }
    }
  }

  
`;
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
  display: none;
  }
`;
const Card = styled.div`
  position: relative;
  height: 40vh;
  flex: 1 0 23rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
`;

const StyledWorksCardBottom = styled(CardBottomText)`
  padding: 0rem 1rem 1rem 1rem;
`;

export default OurWorks;
