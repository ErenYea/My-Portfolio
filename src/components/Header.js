import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useStateValue } from "../StateProvider";
// import Link from "next/link";
// import { Social } from "../typings";
const Header = () => {
  const [state, dispatch] = useStateValue();
  // const [icons, setIcons] = useState([
  //   "https://github.com/ErenYea",
  //   "https://twitter.com/HamzaAl76350082",
  //   "https://www.facebook.com/DrStoneluffy",
  // ]);
  const scrollin = (id) => {
    // console.log(e);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  };
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-0 py-3 sm:p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {state.socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
            className="cursor-pointer h-10 w-10 sm:h-16 sm:w-16"
          />
        ))}
        <a
          className="heroButton text-sm text-gray-400 cursor-pointer"
          href={state.pageInfo?.resume}
          target="_blank"
        >
          Resume
        </a>
        {/* <SocialIcon
          url={icons[1]}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url={icons[2]}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        /> */}
      </motion.div>
      {/* <Link href="#contact"> */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
        onClick={() => scrollin("contact")}
      >
        <SocialIcon
          network="email"
          className="cursor-pointer h-10 w-10 sm:h-16 sm:w-16"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
      {/* </Link> */}
    </header>
  );
};

export default Header;
