import React from "react";
import {Description, Hide } from "../../styles";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, pageAnimation } from "../../animation";

const BlogHeader = () => {
  return (
    <StyledBlog
      style={{ background: "#000" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <BlogDescription>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
            We are always led by creativity
            </motion.h2>
          </Hide>
        </motion.div>
       
        <motion.p variants={fade}>
        We strive to present our clients’ ideas in the most useful way possible thereby creating value for them.
        </motion.p>
      </BlogDescription>

    </StyledBlog>
  );
};


//Styped components

const StyledBlog = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #000;   
  align-items: center;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
const BlogDescription = styled(Description)`
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media (min-width: 576px) {

    h2{
      font-size: 3.45455rem;
      font-style: normal;
      font-weight: 500;
      line-height: 100.2%;
      width: 90%;
      margin: 0 auto;
    }
}
 

  h2 {
    color: #fff;
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-size: 3.05455rem;
    font-style: normal;
    font-weight: 600;
    line-height: 123.2%; /* 6.72rem */ 

   
  }
  h4 {
    color:  #d9d9d9;
    font-family: 'Baloo 2', cursive;
    font-size: 2.23636rem;
    font-style: normal;
    font-weight: 400;
    line-height: 123.2%; /* 4.48rem */
  }
  p {
    width: 60%;
    height: 6.09091rem;
    flex-shrink: 0;
    margin: 0 auto;

    color: #949494;
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-size: 1.16364rem; 
    font-style: normal;
    font-weight: 400;
    line-height: 123.2%; /* 2.912rem */ 
  }
`;

export default BlogHeader;