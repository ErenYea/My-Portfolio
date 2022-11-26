import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
const Skill = ({ skill, directionLeft }) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        src={urlFor(skill?.image).url()}
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-24 sm:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transtion duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:w-24 sm:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
