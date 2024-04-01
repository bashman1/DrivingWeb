import React from "react";

import GetInTouchCards from "../components/GetInTouchComponents/GetInTouchCards";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Footer from "../components/Footer";

const GetInTouch = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <GetInTouchCards /> 
      <Footer /> 
    </motion.div>
  );
};

export default GetInTouch;
