import React from "react";
import mikolo_wedding from "../../img/aboutUsPageImgs/mikolo_wedding.png";
import mikolo_crush from "../../img/aboutUsPageImgs/mikolo_crush.png";

import styled from "styled-components";
import {  Description, Image, Hide, Ellipse } from "../../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../animation";

const Mikolo = () => {
  return (
    <StyledAbout className="bg_black">
      <Kyeyo className="kyeyo card__height">
        <MikoloEllipse className="mikolo_ellipse" />
        <AboutDescription>
          <motion.div className="aboutHeader">
            <Hide>
              <motion.p variants={titleAnim}>Introducing</motion.p>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim}>Mikolo</motion.h2>
            </Hide>
          </motion.div>
          <AboutHide>
            <motion.button variants={fade}>Explore</motion.button>
            <motion.button variants={fade}>Get quote</motion.button>
          </AboutHide>
        </AboutDescription>
        <AboutUsImage>
          <motion.img
            variants={photoAnim}
            src={mikolo_wedding}
            alt="guy with a camera"
          />
        </AboutUsImage>
      </Kyeyo>

      <Kyeyo className="kyeyo card__height">
        <MikoloEllipse className="mikolo_ellipse" />
        <AboutDescription>
          <motion.div className="aboutHeader">
            <Hide>
              <motion.p variants={titleAnim}>Introducing</motion.p>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim}>Brand Kyekyo</motion.h2>
            </Hide>
          </motion.div>
          <AboutHide>
            <motion.button variants={fade}>Explore</motion.button>
            <motion.button variants={fade}>Get quote</motion.button>
          </AboutHide>
        </AboutDescription>
        <AboutUsImage>
          <motion.img
            variants={photoAnim}
            src={mikolo_crush}
            alt="guy with a camera"
          />
        </AboutUsImage>
      </Kyeyo>
    </StyledAbout>
  );
};

//Styled Components
const StyledAbout = styled(motion.div)`
  position: relative;
  overflow: hidden;
  margin-top:1rem;
  display: flex;
  align-items: flex-start;
  column-gap: 1rem;
  padding: 0 1rem;
  border-radius: 1rem;
  flex-wrap: wrap;
  background: none !important;

  justify-content: space-between;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding:0rem;
    margin-top: 0rem;    
    background: #000 !important;
    border-radius: 0rem;
    h2 {
      font-size: 2.5rem;
      padding: 1rem 0 1rem 0;
      white-space: nowrap;
    }
  }
`;

const Kyeyo = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;

  @media (max-width:768px) {
    padding-bottom: 0.7rem;
  }
`;
const MikoloEllipse = styled(Ellipse)`
  top: -20%;
  width: 40.273rem;
  background: #010101c7;
  left: 65%;
`;
const AboutDescription = styled(Description)`
  position: absolute;
  top: 17rem;
  left: 50%;
  transform: translate(-50%, -80%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  padding: 0;
  text-align: center;

  .aboutHeader {
    h2 {
      text-align: center;
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      color: #fff;
      text-align: center;
      font-size: 2.27273rem;
      font-style: normal;
      font-weight: 500;
      line-height: 92.2%; /* 6.70545rem */
    }
    p {
      margin: 1rem 0 0 0;
    }
  }

  @media (max-width: 768px) {
      top: 15rem;
      row-gap: 0.5rem;
      .aboutHeader{
        h2 {
        font-size: 3rem;
        padding: 0;
      }
      p {
        margin: 0;
        font-size: 1.7rem;
        color: #949494; 
      }
      }
     
    }
`;
const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0rem 0.7rem;
  }
   
`;

const AboutHide = styled(Hide)`
  display: flex;
  column-gap: 1rem;

  button {
    padding: 1rem 4rem;
    white-space: nowrap;
    &:nth-child(1) {
      border-radius: 0.70909rem;
      background: #ffcc0a;
      color: #000000;
    }
    &:nth-child(2) {
      border-radius: 0.70909rem;
      border: 2px solid #ffcc0a;
      color: #ffffff;
    }
    @media (max-width: 768px) {
      margin: 0rem 0rem 8rem 0rem !important;
    }
  }
`;
export default Mikolo;
