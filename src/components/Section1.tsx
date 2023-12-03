import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import resume from "/Vincent_Vinuya_Resume.pdf";

function Section1() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(sectionRef.current, { y: 50 });

    tl.to(sectionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.7,
      ease: "power4.out",
    });

    tl.play();
  }, []);

  return (
    <section ref={sectionRef} className="text-center opacity-0">
      <p className="font-courierReg text-colorYellow-0 mb-5">Hi, my name is</p>
      <h1 className="text-colorWhite-0 font-calibreSemBold text-5xl md:text-7xl">
        Vincent Vinuya
      </h1>
      <h1 className="text-colorgray-0 font-calibreSemBold md:text-7xl mb-5 text-5xl ">
        Aspiring Web Developer
      </h1>
      <p className="font-calibreReg md:text-xl text-base w-[16rem] md:w-[27rem] mx-auto text-colorWhite-0 mb-5">
        I have a passion for turning coffee into code, brewing innovation one
        line at a time. Let's bring your ideas to life!
      </p>
      <a href={resume} download={resume}>
        <Button text={"Check my Resume"} />
      </a>
    </section>
  );
}

export default Section1;
