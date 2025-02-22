import React from "react";
import aboutUs1 from "../../img/landing-shade.svg";
import mobileAppLandingImg from "../../img/Screenshot-1.png";
import signsScreen from "../../img/Screenshot-2.png";
import getStarted from "../../img/Screenshot-3.png";
import playstoreSvg from "../../img/playstore.svg";
import applestoreSvg from "../../img/applestore.svg";


import styled from "styled-components";
import { About, Description, Image, Hide, Ellipse } from "../../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../animation";

const AboutSection = () => {
  return (
    <StyledAbout className="styled_about">
      <AboutDescription>

        <motion.div className="aboutHeader">
          <Hide>
            <motion.h2 className="landing__title text_color_gradient" variants={titleAnim}>
              We are here to inject brands with infectious energy in finding.
            </motion.h2>
          </Hide>
          
          <Hide>
            <motion.p  variants={titleAnim}>
            Enjoy safe rides with top rated drivers and affordable fares. 
            </motion.p>
          </Hide>

          <StyledStoreImages>
            <motion.img
            variants={photoAnim}
            src={playstoreSvg}
            alt="guy with a camera"
          />
             <motion.img
            variants={photoAnim}
            src={applestoreSvg}
            alt="guy with a camera"
          />
          </StyledStoreImages>
        </motion.div>

        <AboutHide className="custom__abouthide">
          
          <motion.img
            variants={photoAnim}
            src={signsScreen}
            alt="guy with a camera"
          />
           <motion.img
            variants={photoAnim}
            src={getStarted}
            alt="guy with a camera"
          />
           <motion.img
            variants={photoAnim}
            src={mobileAppLandingImg}
            alt="guy with a camera"
          />
        </AboutHide>

      </AboutDescription>


      <AboutUsImage>
        <motion.img
          variants={photoAnim}
          src={aboutUs1}
          alt="guy with a camera"
        />
      </AboutUsImage>
    </StyledAbout>
  );
};

//Styled Components
const StyledAbout = styled(About)`
  position: relative;
  height: 91.5vh;
  padding: 0rem;
  overflow: hidden;

  @media (max-width: 768px) {
    position: absolute;
    top: -5rem;
  }
`;

const StyledStoreImages = styled(Hide)`
  display: flex;
  column-gap: 1rem;
  justify-content: flex-start

  svg{
    width: 100%;
    flex: 1;
  }

`;

const AboutDescription = styled(Description)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  padding: 0 10rem !important;
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    top: 95%;

    h2 {
      width: 100%;
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    top: 50rem;

    h2 {
      width: 100%;
      font-size: 3rem;
      line-height: 95.7%;
    }
  }

  .aboutHeader {
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;

    h2 {
      text-align: left;
      font-family: "Baloo 2", cursive;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: 100.7%;

    }

    @media only screen and (max-width: 768px) {
      top: 50rem;

      h2 {
        text-align: center;
        font-family: "Baloo 2", cursive;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 103.7%;
        background: linear-gradient(78deg, #f00 0%, #ffcc0a 100%);
        background-clip: border-box;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 0.00001rem;
        padding: 0 2rem;
      }
    }
  }
`;
const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      transform: scale(1.4) translateX(3rem) !important;
    }
  }
`;

const AboutHide = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  position: relative;
  height: 10rem;

  img{
    position: absolute;
    top: -100% !important;
    left: 0%;
    width: auto;
    height: 30rem;
    object-fit: cover;
    border-radius:2rem;
    transform: rotate(10deg) !important;

    &:nth-child(1) {
      left: 35%;
    }
    &:nth-child(2) {
      left: 70%;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1.5rem;

  }
`;
export default AboutSection;
