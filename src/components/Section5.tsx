import Button from "./Button";
import { GiHand } from "react-icons/gi";
function Section5() {
  const handleEmailSend = () => {
    const email = "vincentvinuya33@gmail.com";
    const body = "Hello ^_^";

    const mailtoLink = `mailto:${email}?body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };
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
          <h2 className="font-calibreSemBold font-semibold">Contact Me</h2>
        </div>
        <p className="text-justify font-calibreReg md:text-xl text-base mb-12">
          Hello there! If you believe I'm qualified for the company or have a
          project in mind, I'd love to hear from you. Feel free to reach out for
          collaboration, inquiries, or just to say hi!
          <span className="inline-block text-colorYellow-0 ml-3 shake-animation">
            <GiHand />
          </span>
        </p>
        <Button onClick={() => handleEmailSend()} text={"Send me an Email"} />
      </div>
    </section>
  );
}

export default Section5;
