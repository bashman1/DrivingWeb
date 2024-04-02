import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem 5rem 11rem;

  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;  
export const CardBottomText = styled.div`
    position: absolute;
    bottom: -11rem;
    left: -5px;
    background: #fff8ef;
    color: #949494;
    padding: 1rem 1rem 2rem 1rem;
    border-radius: 0 0 1rem 1rem;
    width: 49rem;

    h3{
        color: #757575;
        font-family: 'Baloo 2', cursive;
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 700;
       
        padding:1rem 0;
        text-align: justify;
    }
    p{
        font-size: 1.4rem;
        line-height: 2rem;
        font-weight: normal;
        color: #757575;
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
export const Description = styled.div`
  flex: 1;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 76%;
  left: 50%;
  width: 70.273rem;
  height: 32.27273rem;
  border-radius: 50%;

  background: #010101fa;
  filter: blur(50px);
  box-shadow: 0 0 400px #010101;
  transform: translate(-50%, -40%);
  z-index: 3;
`;
