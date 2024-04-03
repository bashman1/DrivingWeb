import React from "react";
//Import Icons
import deliveryBag from "../../img/delivery-guy.svg";
import cashless from "../../img/cashless.svg";
import movingCar from "../../img/moving-car.svg";
import bodaGuy from "../../img/boda-guy.svg";

import { motion } from "framer-motion";
//Styles
import { Description } from "../../styles";
import styled from "styled-components";
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const OurMilestones = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledOurMilestones>
        <h2 className="text_color_gradient">Our Services</h2>
        <p className="text__color">We have put a number of corporate brands into a better market position simply by the revamping them.</p>
        <Cards>
          <Card className="d_flex_column_center">
            <div className="icon border__color_1_a">
              <img className="border__circle" alt="icon" src={movingCar} />
            </div>
            <h3 className="text__color">SafeCar</h3>
          </Card>

          <Card className="d_flex_column_center">
          <div className="icon border__color_1_a">
              <img className="border__circle" alt="icon" src={bodaGuy} />
            </div>
            <h3 className="text__color">Send Package</h3>
          </Card>

          <Card className="d_flex_column_center">
          <div className="icon border__color_1_a">
              <img className="border__circle" alt="icon" src={deliveryBag} />
            </div>
            <h3 className="text__color">SafeBoda</h3>
          </Card>
        </Cards>
      </StyledOurMilestones>
    </Services>
  );
};

const Services = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  h2 {
    font-size: 2.7rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding:0rem;
    margin-top: .3rem;
    mmin-height: 25vh;
    
    h2 {
      font-size: 2.5rem;
      padding: 1rem 0 1rem 0;
      white-space: nowrap;
    }
  }
`;

const StyledOurMilestones = styled(Description)`
  height: 100%;
  width: 100%;
  padding: 5rem 3rem 5rem 0rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2.5rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
    row-gap: 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Card = styled.div`
  position: relative;
  text-align: center;
  flex: 1 0 22rem;

  .icon{
    display: flex;
    background-color: #fff8ef;
    border-radius: 8.07035px;
    justify-content: center;
    align-items: center;
    width: 25rem;
    height: 180px;
  }

  h3 {
    color: white;
    font-size: 2rem;
    font-weight: 800;
  }
  p {
    color: #ccc;
    font-size: 1rem;
    line-height: 150%;
    width: 5rem;
    margin: 1rem auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex: 0 0 9rem;
    h3{
      font-size: 2rem;
    }
    p{
      margin: 0 auto;
    }
  }
`;

export default OurMilestones;
