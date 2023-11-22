import Button from "./Button";

function Section5() {
  return (
    <section
      id="contact"
      className="initial-move grid items-center containermid grid-cols-1 lg:gap-4 gap-40  lg:grid-cols-2 pt-24"
    >
      <div className="mx-auto lg:mx-0 order-last lg:order-first">
        <img
          className="w-[350px] h-[390px] rounded-md hoverimg"
          src="/contact.svg"
          alt="contact"
        />
      </div>
      <div className="text-right text-colorWhite-0 ">
        <div className="textmainh1 contact">
          <h2 className="font-calibreSemBold">Contact Me</h2>
        </div>
        <p className="text-justify font-calibreReg md:text-xl text-base mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button text={"Send me an Email"} />
      </div>
    </section>
  );
}

export default Section5;
