import {
  BiLogoGmail,
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
function Links() {
  const iconData = [
    { icon: <BiLogoGmail />, link: "Gmail" },
    {
      icon: <BiLogoFacebookCircle />,
      link: "https://web.facebook.com/vincent.vinuya.3",
    },
    { icon: <BiLogoGithub />, link: "https://github.com/Ultred" },
    {
      icon: <BiLogoLinkedinSquare />,
      link: "https://www.linkedin.com/in/vincentvinuya33",
    },
  ];

  return (
    <div className="fixed text-colorYellow-0 left-[24px] bottom-0 flex flex-col items-center gap-10 ">
      <ul className="flex flex-col gap-[1.8125rem]">
        {iconData.map((icon, index) => (
          <li key={index} className="text-xl">
            <a href={icon.link} target="_blank">
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
      <span className="w-[2px] h-[6.8125rem] bg-colorYellow-0 block"></span>
    </div>
  );
}

export default Links;
