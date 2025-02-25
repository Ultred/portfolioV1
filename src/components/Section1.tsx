import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import resume from "/Vincent_Vinuya_Resume.pdf";

function Section1() {
  const sectionRef = useRef(null);
  const pdfContainerRef = useRef(null);
  const [pdfVisible, setPdfVisible] = useState(false);

  const handleButtonClick = () => {
    setPdfVisible((prev) => !prev);
  };

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

  useEffect(() => {
    if (pdfVisible) {
      gsap.to(pdfContainerRef.current, {
        duration: 0.5,
        opacity: 1,
        display: "block",
      });
    } else {
      gsap.to(pdfContainerRef.current, {
        duration: 0.5,
        opacity: 0,
        display: "none",
      });
    }
  }, [pdfVisible]);

  return (
    <>
      <section ref={sectionRef} className="text-center opacity-0">
        <p className="font-courierReg text-colorYellow-0 mb-5">
          Hi, my name is
        </p>
        <h1 className="text-colorWhite-0 font-calibreSemBold md:text-5xl lg:text-7xl text-3xl font-semibold">
          Vincent Vinuya
        </h1>
        <h1 className="text-colorgray-0 font-calibreSemBold lg:text-7xl mb-5 md:text-5xl text-3xl  font-semibold">
          A Web Developer
        </h1>
        <p className="font-calibreReg md:text-xl text-base w-[16rem] md:w-[27rem] mx-auto text-colorWhite-0 mb-5 mt-8 font-normal">
          I have a passion for turning coffee into code, brewing innovation one
          line at a time. Let's bring your ideas to life!
        </p>
        <Button onClick={handleButtonClick} text={"Check my Resume"} />
      </section>
      <div
        ref={pdfContainerRef}
        className="fixed  top-0 left-0 w-full h-full z-40 flex justify-center items-center"
        style={{ opacity: 0, display: "none" }}
      >
        <div className="bg-white h-[85vh]  max-w-[52rem]">
          <object
            data={resume}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Your browser does not support PDFs. You can download the PDF to
              view it: <a href={resume}>Download PDF</a>
            </p>
          </object>
          <button
            onClick={handleButtonClick}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Section1;
