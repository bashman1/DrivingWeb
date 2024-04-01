import React from "react";

import BlogHeader from "../components/BlogComponents/BlogHeader";
import BlogCards from "../components/BlogComponents/BlogCards";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <BlogHeader />
      <BlogCards /> 
      <Footer /> 
    </motion.div>
  );
};

export default Blog;
