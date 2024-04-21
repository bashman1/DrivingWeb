import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import officeImg from "../../img/ourOffices.png";

const OurOffices = () => {
  return (
    <StyledOurOffices className="bg_black m_top_1">
      <h2 className="title">Our Offices</h2>
      <Cards className="d_flex_row justify_content_space_between">
        <Card className="d_flex_column">
          <motion.img
            className="img_fit"
            src={officeImg}
            alt="office-img"
          ></motion.img>
        </Card>
        <Card className="d_flex_column bg_color_secondary px_5">
          <h3 className="subtitle">Top Driver Uganda</h3>
          <p className="content">Plot 12, Nkrumah Road</p>
          <p className="content">Adiven House</p>
          <p className="content">Kampala</p>
          <p className="content">Uganda</p>
        </Card>
      </Cards>
    </StyledOurOffices>
  );
};

// styled components
const StyledOurOffices = styled(motion.div)`
  padding: 5rem 11rem;
  h2 {
    text-align: left;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Cards = styled(motion.div)`
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Card = styled(motion.div)`
  overflow: hidden;
  flex: 1 0 20rem;
  
  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .content {
    display: flex;
    height: 2rem;

    @media (max-width: 768px) {
      text-align: center !important;
    }
  }
`;
export default OurOffices;
