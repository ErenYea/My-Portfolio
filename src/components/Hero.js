import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
// import Image from "next/image";
// import Hamza from "../images/hamza.jpeg";
// import Link from "next/link";
// import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import { useStateValue } from "../StateProvider";
const Hero = () => {
  const [state, dispatch] = useStateValue();
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${state.pageInfo?.name}`,
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const scrollin = (id) => {
    // console.log(e);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  };
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* <div className=""> */}
      <img
        src={urlFor(state?.pageInfo?.heroImage).url()}
        alt=""
        className="rounded-full relative h-32 w-32 mx-auto object-cover"
      />
      {/* <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="hamza"
          layout="fill"
          className=" rounded-full "
        /> */}
      {/* </div> */}
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {state.pageInfo?.role}
        </h2>
        <h1 className="text-lg lg:text-6xl sm:text-5xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          {/* <Link href="#about"> */}
          <button className="heroButton" onClick={() => scrollin("about")}>
            About
          </button>
          {/* </Link> */}
          {/* <Link href="#experience"> */}
          <button className="heroButton" onClick={() => scrollin("experience")}>
            Experience
          </button>
          {/* </Link> */}
          {/* <Link href="#skills"> */}
          <button className="heroButton" onClick={() => scrollin("skills")}>
            Skills
          </button>
          {/* </Link> */}
          {/* <Link href="#projects"> */}
          <button className="heroButton" onClick={() => scrollin("projects")}>
            Projects
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
