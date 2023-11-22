// Section 4
export const projects = [
  {
    id: 1,
    idName: "tents",
    title: "TENTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    technologies: ["Jquery", "HTML", "CSS", "JavaScript", "PHP", "MySql"],
    links: {
      external: "https://tentstabulation.com/Home",
      github: "#",
    },
    imagePath: "/picture/TENTS.webp",
  },
  {
    id: 2,
    idName: "coraleccomerce",
    title: "Coral Eccomerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    technologies: [
      "HTML",
      "Tailwind",
      "TypeScript",
      "React",
      "axios",
      "Zustand",
    ],
    links: {
      external: "https://eccomerce-proj.vercel.app",
      github: "https://github.com/Ultred/Ultred-Coral-Eccomerce",
    },
    imagePath: "/picture/Coral.webp",
  },
  {
    id: 3,
    idName: "tastequest",
    title: "Taste Quest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    technologies: [
      "HTML",
      "Tailwind",
      "Javascript",
      "React",
      "Spoonacular API",
    ],
    links: {
      external: "https://taste-quest-olive.vercel.app/",
      github: "https://github.com/Ultred/Taste_Quest",
    },
    imagePath: "/picture/Taste Quest.webp",
  },
  {
    id: 4,
    idName: "leftyclone",
    title: "Lefty Clone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    links: {
      external: "https://ultred.github.io/Lefty_Clone/",
      github: "https://github.com/Ultred/Lefty_Clone",
    },
    imagePath: "/picture/Lefty.webp",
  },
];

export type Projecttype = {
  id: number;
  idName: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    external: string;
    github: string;
  };
};
