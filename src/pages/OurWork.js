import React from "react";

import WorksHeader from "../components/WorksComponents/WorksHeader";
import TellUsMore from "../components/WorksComponents/TellUsMore";
import WorksCards from "../components/WorksComponents/WorksCards";
import WorksCardsLower from "../components/WorksComponents/WorksCardsLower";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Footer from "../components/Footer";

const OurWork = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <WorksHeader />
      <WorksCards />
      <WorksCardsLower />
      <TellUsMore />      
      <Footer /> 
    </motion.div>
  );
};

export default OurWork;
