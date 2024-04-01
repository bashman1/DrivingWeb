import React from "react";

import AboutUsHeader from "../components/AboutUsComponents/AboutUsHeader";
import TellUsMore from "../components/AboutUsComponents/TellUsMore";
import HowWeStarted from "../components/AboutUsComponents/HowWeStarted";
import WhereWeAre from "../components/AboutUsComponents/WhereWeAre";
import ToTheFuture from "../components/AboutUsComponents/ToTheFuture";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Footer from "../components/Footer";

const AboutUs= () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutUsHeader />
      <HowWeStarted />
      <WhereWeAre />
      <ToTheFuture />
      <TellUsMore />      
      <Footer /> 
    </motion.div>
  );
};

export default AboutUs;
