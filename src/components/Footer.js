import React from "react";
//Import Icons
import drivingSchLogo from "../img/driving-sch-logo.svg";
import { motion } from "framer-motion";
//Styles
import { Description } from "../styles";
import styled from "styled-components";
import { scrollReveal, photoAnim } from "../animation";
import { useScroll } from "./useScroll";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledFooter>
        <Cards>
          <Card>
            <h3 className="card__header">Packages</h3>
            <ul className="card__items">
              <li className="card__item">Mikolo</li>
              <li>Corperate Branding</li>
              <li>Digital Marketing</li>
              <li>UI Design</li>
              <li>Public Relations</li>
            </ul>
          </Card>
          <Card>
            <h3 className="card__header">Partnerships</h3>
            <ul className="card__items">
              <li className="card__item">Photography</li>
              <li>Fashion</li>
              <li>Videography</li>
              <li> Outdoor Branding</li>
              <li>Printing</li>
            </ul>
          </Card>
          <Card>
            <h3 className="card__header">Resources</h3>
            <ul className="card__items">
              <li className="card__item">About</li>
              <li>The Team</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Card>
          <Card>
            <h3 className="card__header">Company</h3>
            <ul className="card__items">
              <li className="card__item">About</li>
              <li>The Team</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Card>
        </Cards>

        <FooterBottom>
          <div className="logo__container">
            <motion.img
              variants={photoAnim}
              src={drivingSchLogo}
              alt="pato__profile"
            />
          </div>
          <div className="socials__container">
            <p>Follow Us</p>
          </div>
          <div className="copyright__container">
            <p>© 2023 Biara Creative Studio</p>
          </div>
        </FooterBottom>
      </StyledFooter>
    </Services>
  );
};

const Services = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:1rem;
  color: white;
  flex-wrap: wrap;

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
    margin-top:.3rem;
    display: block;
    padding: 0rem;
    text-align: center;
    margin-top:.3rem;
  }
`;

const StyledFooter = styled(Description)`
  height: 100%;
  background: #000;
  width: 100%;
  padding:2rem 0 1rem 0rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 5rem;
  flex-wrap: wrap;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 0 0 auto;
  grid-gap: 1rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  flex:1 0 22rem;

  h3 {
    color: #fff;
    font-family: 'Baloo 2', cursive;
    font-size: 1.72727rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      color: #d9d9d9;
      font-family: 'Baloo 2', cursive;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 182.3%; /* 3.97745rem */
    }
  }

  @media (max-width: 768px) {
    flex:1 0 10rem;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  flex-wrap: wrap;

  p {
    color: #fff;
    font-family: 'Baloo Thambi 2', cursive;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .logo__container {
    flex: 1;

    img {
      width: 5rem;
    }
  }
  .socials__container {
    flex: 1;
  }
  .copyright__container {
    flex: 2;
    p {
      text-align: right;     
    }
  }
`;
export default Footer;
