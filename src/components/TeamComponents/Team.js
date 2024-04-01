import React from "react";

import TeamHeader from "../TeamComponents/TeamHeader";
import TellUsMore from "../TeamComponents/TellUsMore";
import WorksCards from "../TeamComponents/TeamCardsCards";
import WorksCardsLower from "../TeamComponents/Te";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import Footer from "../Footer";

const OurTeam= () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <TeamHeader />
      <WorksCards />
      <WorksCardsLower />
      <TellUsMore />      
      <Footer /> 
    </motion.div>
  );
};

export default OurTeam;
