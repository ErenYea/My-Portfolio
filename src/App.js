import React, { useEffect, useState } from "react";
import getExperience from "./api/getExperience";
import getPageInfo from "./api/getPageInfo";
import getProjects from "./api/getProjects";
import getSkills from "./api/getSkills";
import getSocials from "./api/getSocials";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function App() {
  const [state, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);
  const scrollin = (e) => {
    console.log(e);
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView();
    }
  };
  useEffect(() => {
    const getData = async () => {
      const experience = await getExperience();
      const pageInfo = await getPageInfo();
      const projects = await getProjects();
      const skills = await getSkills();
      const socials = await getSocials();
      // console.log(experience);
      dispatch({
        type: "ADD_ALL",
        payload: { experience, pageInfo, projects, skills, socials },
      });
      setLoading(false);
    };
    getData();
  }, []);
  console.log("state>>>", state);
  if (loading) {
    return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scroll-smooth scrollbar-thumb-[#F7AB0A]/80 z-0">
        <div className="flex justify-center items-center h-screen">
          <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[rgb(36,36,36)] rounded-full border-2 border-[rgb(36,36,36)]"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scroll-smooth scrollbar-thumb-[#F7AB0A]/80 z-0">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section className="snap-center" id="about">
          <About />
        </section>

        <section className="snap-center" id="experience">
          <WorkExperience />
        </section>

        <section className="snap-start" id="skills">
          <Skills />
        </section>

        <section className="snap-start" id="projects">
          <Projects />
        </section>

        <section className="snap-start" id="contact">
          <ContactMe />
        </section>
        {/* <Link to="hero"> */}
        <footer
          className="sticky bottom-5 w-full cursor-pointer"
          onClick={scrollin}
        >
          <div className="flex items-center justify-center">
            <img
              src="https://i.ibb.co/8zGPbFK/hamza.jpg"
              alt=""
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </footer>
        {/* </Link> */}
      </div>
    );
  }
}

export default App;
