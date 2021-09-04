import { Colors } from "../data/Variables";

const particlesConfig = {
  fps_limit: 30,
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 2000,
      },
    },
    color: {
      value: [
        `${Colors.primary}`,
        `${Colors.lightGreen}`,
        `${Colors.glass}`,
        `${Colors.secondary}`,
      ],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: `${Colors.white}`,
      },
      polygon: {
        nb_sides: 10,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: `${Colors.primary}`,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;
