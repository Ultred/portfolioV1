// Section 4
export const projects = [
  {
    id: 1,
    idName: "tents",
    title: "TENTS",
    description: `Our Capstone Project developed by our team. A website that simplifies event management with efficient result tabulation, customizable event details.                         Use this account: Username: Sample12, Password: Sample123`,
    technologies: ["Jquery", "CSS", "JavaScript", "PHP", "MySql"],
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
      "An eccomerce website where you can search and  shop a range of products categorized for easy navigation, and checkout securely using Stripe.",
    technologies: [
      "Tailwind",
      "TypeScript",
      "React",
      "Stripe",
      "Zustand",
      "Nodejs",
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
      "Taste Quest a dynamic website that serves as your culinary companion! Explore a diverse range of recipes, stay updated on the latest culinary trends, and curate your own collection of favorites.",
    technologies: ["Tailwind", "Javascript", "React", "Spoonacular API"],
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
      "A website clone that helped me better my HTML, CSS, and javascript foundations while also having an appealing and challenging design.",
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
