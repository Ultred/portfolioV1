import Navbar from "../components/Navbar";
import Links from "../components/Links";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Footer from "../components/Footer";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateSection(name: string) {
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

function Main() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    animateSection("about");
    animateSection("skills");
    animateSection("contact");
  }, []);
  return (
    <main id="yourAppElement" className="mx-auto max-w-screen-2xl   py-3 px-6">
      <Links />
      <Navbar />
      <Section1 />
      <div className="md:px-[4rem] px-[1.1rem]">
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </main>
  );
}

export default Main;
