import React from "react";
import { motion } from "framer-motion";
import { useStateValue } from "../StateProvider";
// import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
const About = () => {
  const [state, dispatch] = useStateValue();
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        src={urlFor(state.pageInfo?.profilePic).url()}
        className="mt-30 sm:mt-20 mb-10 sm:mb-20 md:mb-0 flex-shrink-0 w-36 h-36 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-2 sm:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base ">{state.pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
