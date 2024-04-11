import React from "react";
//Import Icons

import { motion } from "framer-motion";
//Styles
import { Description } from "../../styles";
import pato from "../../img/beginningofdualcarriageroad.png";

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
      <StyledAboutPato className="about_pato primary_bg">
        <Cards>
          <Card>
            <div className="card__top">
              <div className="profile__img">
                <motion.img
                  variants={photoAnim}
                  src={pato}
                  alt="pato__profile"
                />
              </div>
              <div className="profile__header">
                <h3>Patrick Muhumuza</h3>
                <p>Head of Operations, SchoolPay</p>
              </div>
            </div>
            <div className="card__bottom">
              <p>
                “I worked with the team to create our branding and website for
                our product. The studio helped us to create this by
                understanding what we wanted to achieve. Our branding that we
                achieved is exactly what we set out to achieve and we are very
                happy with all of the work. I would highly recommend Biara
                Creative Studio.”
              </p>
            </div>
          </Card>
          <Card>
            <div className="card__top">
              <div className="profile__img">
                <motion.img
                  variants={photoAnim}
                  src={pato}
                  alt="pato__profile"
                />
              </div>
              <div className="profile__header">
                <h3>Patrick Muhumuza</h3>
                <p>Head of Operations, SchoolPay</p>
              </div>
            </div>
            <div className="card__bottom">
              <p>
                “I worked with the team to create our branding and website for
                our product. The studio helped us to create this by
                understanding what we wanted to achieve. Our branding that we
                achieved is exactly what we set out to achieve and we are very
                happy with all of the work. I would highly recommend Biara
                Creative Studio.”
              </p>
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
        .profile__img{
            
            img{
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                object-fit: cover;
            }
        }
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
