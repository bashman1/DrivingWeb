import React from "react";
//Import Icons
import trusted from "../../img/fillingstation.png";
import cashless from "../../img/centrelinemarking.png";
import movingCar from "../../img/ambulance.png";
import negotiation from "../../img/44heightprohibited.png";

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
      <StyledAboutServices className="about_service primary_bg_95">
        <StyledWorksTop>
          <motion.img
            variants={movingCar}
            src={movingCar}
            alt="guy with a camera"
          />
          <h2 className="text__color">Now move the way you deserve with our SafeCars</h2>
        </StyledWorksTop>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={cashless} />
            </div>
            <StyledWorksCardBottom>
              <h3>Video Interviews</h3>
              <p className="text__color">A cashless, no hassle experience, with SafeBoda wallet</p>
            </StyledWorksCardBottom>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={trusted} />
            </div>

            <StyledWorksCardBottom>
              <h3>Video Ads</h3>
              <p className="text__color">Safe and convenient. Ride with trained, trusted drivers</p>
            </StyledWorksCardBottom>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={negotiation} />
            </div>
            <StyledWorksCardBottom>
              <h3>Product Launches</h3>
              <p className="text__color">Safe and convenient. Ride with trained, trusted drivers</p>
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
  white-space: normal;
  width: 35rem;
  margin: 0 auto 4rem auto;
  line-height: 3.7rem;
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

  img {
    width: 13rem;
    margin: 0 auto;
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

    img {
      object-fit: cover;
      border-radius: 1rem;
      height: 13rem;
    }
  }
`;

const StyledWorksCardBottom = styled(motion.div)`
    color: #949494;
    padding: 1rem 1rem 2rem 1rem;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-family: 'Baloo 2', cursive;
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 700;
        padding:1rem 0;
        text-align: center;
    }
    p{
        font-size: 1.4rem;
        line-height: 2rem;
        font-weight: normal;
        text-align: center;
    }
    @media (max-width: 768px) {
      padding: .5rem 1rem 2rem 1rem;
      bottom: -5rem;
      h3{
        padding:0;
      }
      p{
        font-size: 1.3rem;
        line-height: 1.7rem;
        font-weight: normal;
        text-align: left;
      }
    }
   
  
`;

export default OurWorks;
