import { FiArrowUpRight } from "react-icons/fi";
function Section2() {
  return (
    <section
      id="about"
      className="grid items-center containermid grid-cols-1 lg:gap-4 gap-40  lg:grid-cols-2 pt-24"
    >
      <div className="relative mx-auto lg:mx-0 order-last lg:order-first">
        <img
          className="w-[350px] h-[390px] rounded-md hoverimg"
          src="/aboutme.jpg"
          alt="picture of me ^-^"
        />
        <div className="boxafter shadowcustom">
          <span className="button-background"></span>
        </div>
      </div>
      <div className="text-right text-colorWhite-0 ">
        <div className="textmainh1">
          <h2 className="font-calibreSemBold">Who am I?</h2>
        </div>
        <p className="text-justify font-calibreReg md:text-xl text-base">
          Originally from the town of Candaba in Pampanga, I've developed a love
          for learning new things daily. Currently, my fascination lies in the
          realm of web development, with a keen focus on
          <span className="text-colorYellow-0 mx-3">front-end design.</span>
        </p>
        <p className="text-justify font-calibreReg md:text-xl text-base mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </p>
        <button className="flex  float-right items-center text-colorYellow-0 font-calibreMeduim  text-xl">
          Let's Talk
          <span className="mb-[0.35rem] ml-2">
            <FiArrowUpRight />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Section2;
