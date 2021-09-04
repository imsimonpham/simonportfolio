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
import styled from "../img/styledComponentsIcon.png";

export const ProjectData = [
  {
    title: "Recipe Lab",
    linkDemo: "https://recipelaboratory.netlify.app/",
    linkGithub: "https://github.com/imsimonpham/finding-a-recipe",
    alt: "project image",
    text: `Have you ever opened your fridge and have no idea what to cook for supper tonight? Or maybe you have spent 30 minutes discussing with your partner how you should cook the chicken for your anniversary dinner? This is why I came up with Recipelab - a web application that can suggest many recipes based on user input ingredients. It also notifies users if the recipe is vegan or if it contains milk or gluten. API data is fetched using a custom Hook and the states are managed using Redux-Toolkit.`,
    img: recipelab,
    tech: [
      { icon: react, name: "React" },
      { icon: redux, name: "Redux-Toolkit" },
      { icon: styled, name: "Styled Components" },
    ],
  },
  {
    title: "Impresso Café",
    linkDemo: "https://impressocafe.netlify.app/",
    linkGithub: "https://github.com/imsimonpham/impresso-cafe",
    alt: "project image",
    text: `Impresso Café is a static website that I built to dedicate my love for cafés with industrial vibes and nice relaxing background music. This was also my very first React project.`,
    img: impressocafe,
    tech: [
      { icon: react, name: "React" },
      { icon: reactBootstrap, name: "Redux-Bootstrap" },
      { icon: styled, name: "Styled Components" },
    ],
  },
  {
    title: "Kim Nails Beauty",
    linkDemo: "https://kimnailsbeauty.netlify.app/",
    linkGithub: "https://github.com/imsimonpham/kimnailsbeauty",
    alt: "project image",
    text: `Kim Nails Beauty is a Nail Salon website that I built for my aunt living in Norway. It was styled using Material-UI and favourite library, Styled-Components. I also implemented third-party software to help manage client appoinment bookings.`,
    img: kimnailsbeauty,
    tech: [
      { icon: react, name: "React" },
      { icon: material, name: "Material-UI" },
      { icon: styled, name: "Styled Components" },
    ],
  },
  {
    title: "The Mont Blanc",
    linkDemo: "https://imsimonpham.github.io/themontblanc/",
    linkGithub: "https://github.com/imsimonpham/finding-a-recipe",
    alt: "project image",
    text: `The Mont Blanc is an e-commerce website that sells luxury accessories for men. Everything from structure, styling to DOM manipulation was built from scratch using just HTML, CSS and Vanilla Javascript. Items in user shopping carts are saved in local storage so it's convenient for users' experience.`,
    img: themontblanc,
    tech: [
      { icon: html, name: "HTML5" },
      { icon: css, name: "CSS3" },
      { icon: js, name: "Javascript" },
    ],
  },
];
