import recipelab from "../img/recipelab.jpg";
import impressocafe from "../img/impressocafe.jpg";
import kimnailsbeauty from "../img/kimnailsbeauty.jpg";
import themontblanc from "../img/themontblanc.jpg";

import html from "../img/htmlIcon.png";
import css from "../img/cssIcon.png";
import js from "../img/jsIcon.png";
import react from "../img/reactIcon.png";
import redux from "../img/reduxIcon.png";
import material from "../img/materialIcon.png";
import reactBootstrap from "../img/reactboostrapIcon.png";

export const ProjectData = [
  {
    title: "Recipe Lab",
    linkDemo: "https://recipelaboratory.netlify.app/",
    linkGithub: "https://github.com/imsimonpham/finding-a-recipe",
    alt: "project image",
    text: "",
    img: recipelab,
    tech: [
      { icon: react, name: "React" },
      { icon: redux, name: "Redux-Toolkit" },
    ],
  },
  {
    title: "Impresso Café",
    linkDemo: "https://impressocafe.netlify.app/",
    linkGithub: "https://github.com/imsimonpham/impresso-cafe",
    alt: "project image",
    text: "",
    img: impressocafe,
    tech: [
      { icon: react, name: "React" },
      { icon: reactBootstrap, name: "Redux-Bootstrap" },
    ],
  },
  {
    title: "Kim Nails Beauty",
    linkDemo: "https://kimnailsbeauty.netlify.app/",
    linkGithub: "https://github.com/imsimonpham/kimnailsbeauty",
    alt: "project image",
    text: "",
    img: kimnailsbeauty,
    tech: [
      { icon: react, name: "React" },
      { icon: material, name: "Material-UI" },
    ],
  },
  {
    title: "The Mont Blanc",
    linkDemo: "https://imsimonpham.github.io/themontblanc/",
    linkGithub: "https://github.com/imsimonpham/finding-a-recipe",
    alt: "project image",
    text: "",
    img: themontblanc,
    tech: [
      { icon: html, name: "HTML5" },
      { icon: css, name: "CSS3" },
      { icon: js, name: "Javascript" },
    ],
  },
];
