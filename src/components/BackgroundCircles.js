import React from "react";
import { motion } from "framer-motion";
const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] sm:h-[400px] sm:w-[400px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[300px] w-[300px] lg:h-[650px] lg:w-[650px] sm:h-[300px] sm:w-[300px] mt-52 animate-pulse absolute" />
      <div className="rounded-full border border-[#333333] h-[400px] w-[400px] lg:h-[800px] lg:w-[800px] sm:h-[400px] sm:w-[400px]  mt-52 absolute" />
    </motion.div>
  );
};

export default BackgroundCircles;
