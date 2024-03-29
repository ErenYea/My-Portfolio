import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { useStateValue } from "../StateProvider";
const WorkExperience = () => {
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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 sm:top-24 uppercase tracking-[20px] text-gray-500 text-lg sm:text-xl lg:text-2xl">
        Experience
      </h3>
      <div className="mt-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory   scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
        {state.experience?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}

        {/* <ExperienceCard />
        <ExperienceCard /> */}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
