import React from "react";

import CareerHeader from "../components/CareersComponents/CareerHeader";
import CareersCards from "../components/CareersComponents/CareersCards";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <CareerHeader />
      <CareersCards /> 
      <Footer /> 
    </motion.div>
  );
};

export default Careers;
