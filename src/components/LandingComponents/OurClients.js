import React from "react";
//Import Icons
import neptune from "../../img/aboutUsPageImgs/neptune.png";
import gula_store from "../../img/aboutUsPageImgs/gula_store.png";
import we_farm from "../../img/aboutUsPageImgs/we_farm.png";
import seep from "../../img/aboutUsPageImgs/seep.png";
import scl from "../../img/aboutUsPageImgs/scl.png";
import schpay from "../../img/aboutUsPageImgs/schpay.png";
import { motion } from "framer-motion";
//Styles
import { Description } from "../../styles";
import styled from "styled-components";
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledOurClients>
        <h2>Our Clients</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={scl} />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={neptune} />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={schpay} />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={gula_store} />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={seep} />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={we_farm} />
            </div>
          </Card>
        </Cards>
      </StyledOurClients>
    </Services>
  );
};

const Services = styled(motion.div)`
  min-height: 45vh;
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
    padding-bottom: 4rem;
    font-size: 3rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    margin-top: 45rem;
    padding: 2.5rem 0 0 0rem;
    min-height: 14vh;

    h2 {
      font-size: 2.5rem;
      padding:1rem 0 2rem 0;
      white-space: nowrap;
    }
  }
`;

const StyledOurClients = styled(Description)`
  height: 100%;
  background: #000;
  width: 100%;
  padding: 0 9.5rem 0 10.7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  width: 99%;
  margin: 0 auto;

  @media (max-width: 1300px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding-bottom: 2rem;

    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Card = styled.div`
  flex: 1 0 15rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 9rem;
      height: 4rem;
      object-fit: contain;
    }
  }
`;

export default ServicesSection;
