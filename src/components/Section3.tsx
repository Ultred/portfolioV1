import { useState } from "react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { FaNode } from "react-icons/fa6";
function Section3() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>("default");
  const frontEndData = [
    { icon: <BiLogoHtml5 />, name: "HTML" },
    { icon: <BiLogoCss3 />, name: "CSS" },
    { icon: <BiLogoTailwindCss />, name: "Tailwind" },
    { icon: <BiLogoJavascript />, name: "JavaScript" },
    { icon: <BiLogoReact />, name: "React Js" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
  ];
  const backEndData = [
    { icon: <FaNode />, name: "Nodejs" },
    { icon: <GrMysql />, name: "MySql" },
  ];
  const othersData = [
    { icon: <BiLogoGithub />, name: "Github" },
    { icon: <BiLogoGit />, name: "Git" },
    { icon: <PiFigmaLogoDuotone />, name: "Figma" },
  ];
  return (
    <section
      className="initial-move pt-24 relative overflow-hidden"
      id="skills"
    >
      <div className="absolute z-[-10] bottom-[-3rem] right-[-10rem]">
        <img
          className="w-[30rem] h-[30rem]"
          src={`/${hoveredIcon}.webp`}
          alt=""
        />
      </div>
      <div className="textmainh1 right text-colorWhite-0">
        <h2 className="font-calibreSemBold font-semibold">My Skills</h2>
      </div>
      <div>
        <div className="shadowcustom bordereaze relative md:w-[70%]">
          <h2 className="absolute font-semibold font-calibreSemBold text-2xl text-colorWhite-0 bg-colorBlack-0 px-1 top-[-13px] left-[16px]">
            Front End
          </h2>
          <ul className="text-colorWhite-0 bg-colorBlack-0 items-center  flex flex-wrap md:flex-nowrap font-calibreReg py-[2.5rem]">
            {frontEndData.map((props, index) => (
              <li
                className="w-1/2 md:w-full flex flex-col items-center gap-4"
                key={index}
                onMouseEnter={() => setHoveredIcon(props.name)}
                onMouseLeave={() => setHoveredIcon("default")}
              >
                <span className="text-5xl cursor-pointer">{props.icon}</span>
                <p className="text-xl ">{props.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:flex-row flex-col items-center mt-9 gap-8">
          <div className="shadowcustom bordereaze relative md:w-[30%] w-full">
            <h2 className="absolute font-semibold font-calibreSemBold text-2xl text-colorWhite-0 bg-colorBlack-0 px-1 top-[-13px] left-[16px]">
              Back End
            </h2>
            <ul className="text-colorWhite-0 bg-colorBlack-0 items-center  flex flex-wrap md:flex-nowrap font-calibreReg py-[2.2rem]">
              {backEndData.map((back, index) => (
                <li
                  className="w-1/2 md:w-full flex flex-col items-center gap-4"
                  key={index}
                  onMouseEnter={() => setHoveredIcon(back.name)}
                  onMouseLeave={() => setHoveredIcon("default")}
                >
                  <span className="text-5xl cursor-pointer">{back.icon}</span>
                  <p className="text-xl ">{back.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="shadowcustom bordereaze relative md:w-[70%] w-full">
            <h2 className="absolute font-semibold font-calibreSemBold text-2xl text-colorWhite-0 bg-colorBlack-0 px-1 top-[-13px] left-[16px]">
              Others
            </h2>
            <ul className="text-colorWhite-0 bg-colorBlack-0 items-center  flex flex-wrap md:flex-nowrap font-calibreReg py-[2.2rem]">
              {othersData.map((back, index) => (
                <li
                  className="w-1/2 md:w-full flex flex-col items-center gap-4"
                  key={index}
                  onMouseEnter={() => setHoveredIcon(back.name)}
                  onMouseLeave={() => setHoveredIcon("default")}
                >
                  <span className="text-5xl cursor-pointer">{back.icon}</span>
                  <p className="text-xl ">{back.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
