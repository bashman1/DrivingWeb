import React from "react";
//Page Components
import AboutSection from "../components/LandingComponents/AboutSection";
import OurClients from "../components/LandingComponents/OurClients";
import AboutServices from "../components/LandingComponents/AboutServices";
import OurWorks from "../components/LandingComponents/OurWorks";
import OurMilestones from "../components/LandingComponents/OurMilestones";
import StudioSpace from "../components/LandingComponents/StudioSpace";
import Mikolo from "../components/LandingComponents/Mikolo";
import AboutPato from "../components/LandingComponents/AboutPato";
import Footer from "../components/Footer";


//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Landing = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <AboutServices />
      <OurWorks />
       {/*
      <OurMilestones/>
      <StudioSpace />
      <Mikolo />     
      <AboutPato /> 
      <ScrollTop />
      <Footer/> */}
    </motion.div>
  );
};

export default Landing;
