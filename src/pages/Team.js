import React from "react";

import TeamHeader from "../components/TeamComponents/TeamHeader";
import TellUsMore from "../components/TeamComponents/TellUsMore";
import TeamCards from "../components/TeamComponents/TeamCards";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Footer from "../components/Footer";

const OurTeam= () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <TeamHeader />
      <TeamCards />
      <TellUsMore />      
      <Footer /> 
    </motion.div>
  );
};

export default OurTeam;
