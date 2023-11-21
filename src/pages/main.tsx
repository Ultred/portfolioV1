import Navbar from "../components/Navbar";
import Links from "../components/Links";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Footer from "../components/Footer";
import FollowMouse from "../components/FollowMouse";
function Main() {
  return (
    <main id="yourAppElement" className="mx-auto max-w-screen-2xl   py-3 px-6">
      <FollowMouse />
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
