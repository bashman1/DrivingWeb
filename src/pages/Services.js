import React from "react";

import ServicesHeader from "../components/ServiceComponents/ServicesHeader";
import BrandDesign from "../components/ServiceComponents/BrandDesign";
import DigitalMarketing from "../components/ServiceComponents/DigitalMarketing";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ServicesHeader />
      <BrandDesign />
      <DigitalMarketing />
      <Footer /> 
    </motion.div>
  );
};

export default Services;
