import { GiGuitar } from "react-icons/gi";
import { MdMovie } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { IoFastFoodSharp } from "react-icons/io5";
function Section2() {
  return (
    <section
      id="about"
      className="initial-move grid items-center containermid grid-cols-1 lg:gap-4 gap-40  lg:grid-cols-2 pt-24"
    >
      <div className="relative mx-auto lg:mx-0 order-last lg:order-first">
        <img
          className="w-[350px] h-[390px] rounded-md hoverimg"
          src="/imahe.webp"
          alt="picture of me ^-^"
        />
        <div className="boxafter shadowcustom">
          <span className="button-background"></span>
        </div>
      </div>
      <div className="text-right text-colorWhite-0 ">
        <div
          style={{
            marginBottom: "3rem",
          }}
          className="textmainh1"
        >
          <h2 className="font-calibreSemBold">Who am I?</h2>
        </div>
        <p className="text-justify indent-9 font-calibreReg md:text-xl text-base mb-5">
          In my childhood, a curiosity about how computers function ignited my
          journey into the world of technology. Starting from the simple
          intrigue of pressing keys to exploring the settings of various devices
          until I developed my curiosity into coding.
        </p>
        <p className="text-justify indent-9 font-calibreReg md:text-xl text-base">
          Originally from Candaba, Pampanga, I've developed a love for learning
          new things daily. Currently, my fascination lies in the realm of web
          development, with a keen focus on front-end design and responsive
          layout.
        </p>
        <p className="text-justify my-4 text-colorYellow-0 font-courierItalic  text-sm">
          In my spare time, you can find me doing this:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-calibreSemBold md:text-xl text-lg">
          <div className="flex items-center gap-4">
            <span className="text-blue-500 text-4xl">
              <MdMovie />
            </span>
            <p className="pt-2">Movies</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-300 text-4xl">
              <GiGuitar />
            </span>
            <p className="pt-2">Guitar</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-green-500 text-4xl">
              <SiYoutubegaming />
            </span>
            <p className="pt-2">Gaming</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-purple-700 text-4xl">
              <CgGym />
            </span>
            <p className="pt-2">Gym</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-orange-600 text-4xl">
              <IoFastFoodSharp />
            </span>
            <p className="pt-2">Eating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
