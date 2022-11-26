import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { useStateValue } from "../StateProvider";
const Skills = () => {
  const [state, dispatch] = useStateValue();
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profienciency
      </h3>
      <div className="pt-20 grid grid-cols-3 gap-3 sm:gap-5 sm:grid-cols-4">
        {state.skills?.slice(0, state.skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {state.skills
          ?.slice(state.skills.length / 2, state.skills.length)
          .map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
      </div>
    </motion.div>
  );
};

export default Skills;
