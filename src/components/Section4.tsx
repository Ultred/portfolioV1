import { FiExternalLink } from "react-icons/fi";
import { BiLogoGithub, BiShowAlt } from "react-icons/bi";
import { projects } from "../data/allData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

function projectAnimate(name: string) {
  gsap.to(`#${name}`, {
    scrollTrigger: {
      trigger: `#${name}`,
      start: "30px 90%",
    },
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power4.out",
  });
}

function Section4() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    projects.map((projIdName) => {
      return projectAnimate(projIdName.idName);
    });
  }, []);
  return (
    <section className="pt-24 " id="projects">
      <h2 className="font-calibreSemBold  text-colorWhite-0 textmainh1 text-center font-semibold none">
        Featured Projects
      </h2>
      <p className="text-center text-colorYellow-0  font-courierReg text-lg">
        Here are some of the projects I've worked on
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-32  items-center md:pr-10 md:border-r-2 md:border-r-colorYellow-0 md:border-solid gap-16 lg:gap-28 py-4">
        {projects.map((proj) => (
          <div className="initial-move" id={proj.idName} key={proj.id}>
            <a target="_blank" href={proj.links.external}>
              <div className="relative imgproject">
                <img
                  className="lg:h-[278px] lg:w-[504px] w-full h-[220px] "
                  src={proj.imagePath}
                  alt={proj.title}
                />
                <div className="absolute inset-0 bg-colorOverlay-0 opacity-50 hover:opacity-0"></div>
                <div className="viewmore absolute px-3 gap-3 text-3xl py-[.3rem] text-colorBlack-0 bottom-[2%] right-[2%] bg-colorWhite-0 rounded-md flex items-center">
                  <p className="uppercase font-medium font-calibreMeduim text-base pt-1">
                    Click To View The Website
                  </p>
                  <BiShowAlt />
                </div>
              </div>
            </a>
            <div className="text-colorWhite-0 mt-8 text-right">
              <h3 className="font-calibreSemBold font-semibold textmainh1 none">
                {proj.title}
              </h3>
              <p className="font-calibreReg md:text-xl text-base">
                {proj.description}
              </p>
              <ul className="flex flex-wrap items-center justify-end font-courierItalic italic text-colorYellow-0 gap-5  my-6">
                {proj.technologies.map((techuse, index) => (
                  <li key={index}>{techuse}</li>
                ))}
              </ul>
              <div className="flex items-center justify-end text-2xl gap-6">
                <a target="_blank" href={proj.links.external}>
                  <FiExternalLink />
                </a>
                <a target="_blank" href={proj.links.github}>
                  <BiLogoGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section4;
