import React from "react";
//Import Icons

import { motion } from "framer-motion";
//Styles
import { Description } from "../../styles";
import pato from "../../img/unreal@2x.webp";
import img1 from "../../img/mobi_img_1.png";
import img2 from "../../img/mobi_img_2.png";
import iphone from "../../img/chip_performance_hw__6ytcie74ao22_large_2x.png";

import styled from "styled-components";
import { scrollReveal, photoAnim } from "../../animation";
import { useScroll } from "../useScroll";

const AboutPato = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledAboutPato className="about_pato bg_learnmore_section">
        <Cards>
          <Card className="p__0">
            <div className="lrnmre__card">
              <div className="card__top iphone__cap absolute">
                <motion.img
                      variants={photoAnim}
                      src={iphone}
                      alt="pato__profile"
                    />
              </div>
              <div className="card__top first__cap absolute cap__width">
                <motion.img
                      variants={photoAnim}
                      src={img1}
                      alt="pato__profile"
                      className="border_radius_sm border__color_1"
                    />
            </div>
            <div className="card__top second__cap absolute cap__width">
              <motion.img
                    variants={photoAnim}
                    src={img2}
                    alt="pato__profile"
                    className="border_radius_sm border__color_1"
                  />
            </div>
            <div className="card__top third__cap absolute cap__width">
              <motion.img
                    variants={photoAnim}
                    src={img2}
                    alt="pato__profile"
                    className="border_radius_sm border__color_1"
                  />
            </div>
            </div>
          </Card>
          
          <Card>
            <div className="card__top">
              <div className="profile__header">
                <h3 className="black_shade lm-fmt h6-sb">Top Driver Uganda Payments & 
                  <br />Financial Services
                </h3>
              </div>
            </div>
            <div className="card__bottom">
              <p className="greyish bodybig-sb">
                “I worked with the team to create our branding and website for
                our product. The studio helped us to create this by
                understanding what we wanted to achieve. Our branding that we
                achieved is exactly what we set out to achieve.”
              </p>
            </div>
            <div className="btn_container">
              <button className="get_in_touch secondary_color primary-btn border__color_3">Learn More</button>
            </div>
          </Card>
        </Cards>
      </StyledAboutPato>
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
    display: block;
    padding: 0;
    text-align: center;
  }
`;

const StyledAboutPato = styled(Description)`
  height: 100%;
  width: 100%;
  padding: 1rem 0rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 5rem;
`;

const Cards = styled.div`
 display: flex;
 padding: 0 10rem 0 11.5rem;
  width: 100%;
  margin: 0 auto;
  column-gap: 1rem;
  flex-wrap: nowrap;

  @media (max-width: 1300px) {
    justify-content: center;
    padding: 0 1.5rem 0 1.5rem;
  }
  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: flex-start;
    overflow-x: scroll;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 5rem;
  border-radius: 1.81818rem; 
  flex: 1;

  .lrnmre__card{
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
      }

    .card__top{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 1rem;
      flex-wrap: wrap;

        h3{
            color: #FFF;
            font-family: 'Baloo 2', cursive;
            font-size: 1.63636rem;
            font-style: normal;
            font-weight: 500;
            line-height: 92.2%; /* 3.35273rem */
            margin-bottom: .8rem;
        }
        p{
            color: #949494;
            font-family: 'Baloo 2', cursive;
            font-size: 1.12727rem;
            font-style: normal;
            font-weight: 500;
            line-height: 92.2%; /* 2.51455rem */
        }
        img{
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
    }

    .iphone__cap{
      top: 0%;
      left: 0%;
      transform: rotate(90deg) !important;
      transform-origin: 50% 100%;
      
      img{
        height: 18rem;
      }
    }
    .cap__width{
      width: 20rem;
      height: 8rem;
      left: 30% !important;
    }

    .first__cap{
      top: 10% !important;
    }
    .second__cap{
      top: 40%;

    }
    .third__cap{
      top: 70%;
     
    }
  .card__bottom{
    p{
        color: #949494;
        font-family: 'Baloo 2', cursive;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 142.2%; /* 3.23182rem */
    }
   
  }

  @media (max-width:768px) {
    flex: 1 0 30rem;
    padding: 1rem;

    .card__bottom{
      p{
        text-align: left;
      }
    }
  }
  
`;

export default AboutPato;
