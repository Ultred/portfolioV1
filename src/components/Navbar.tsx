import { useState, useEffect } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEffectOpen, setIsEffectOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEffect = () => {
    setIsEffectOpen(!isEffectOpen);
  };

  useEffect(() => {
    const handleScrollbar = () => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    };

    handleScrollbar();

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setPrevScrollPos((prevPos) => {
        setIsScrolled(prevPos > currentScrollPos);
        return currentScrollPos;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <ul
        className={`flex md:hidden text-colorWhite-0 font-courierReg gap-20 text-base  flex-col fixed text-center top-0 left-0 h-full w-full z-20 pt-20 bg-colorBlack-0 right-0  ${
          !isMenuOpen && "hidden"
        }`}
      >
        {navbarItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} onClick={toggleMenu}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`effectonly fixed h-full top-0 left-0 w-[45%] bg-colorYellow-0 z-30 ${
          isMenuOpen || isEffectOpen ? "active" : ""
        }`}
      ></div>
      <nav
        className={`mx-auto max-w-screen-2xl pr-10 fixed top-0 navbar bg-colorBlack-0 ${
          isScrolled ? "active" : "up"
        } md:py-1`}
      >
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
              <img src="/Logo.svg" alt="VY" />
            </a>
          </div>
          <ul
            className={`text-colorWhite-0 font-courierReg gap-20 text-base hidden md:flex`}
          >
            {navbarItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} onClick={toggleEffect}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`div-hamburger md:hidden ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
