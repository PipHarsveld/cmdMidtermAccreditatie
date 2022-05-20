gsap.registerPlugin(ScrollTrigger);

gsap.to(".nina", {
  x: -20,
  duration: 3,
  opacity: 1,
  scrollTrigger: {
    trigger: "article:nth-of-type(3) > div > h2",
    start: "top top",
    end: "top top",
    toggleActions: "restart none none none",
    scrub: 7,
  },
});

// gsap.to(
//   "article:nth-of-type(4) > article:first-of-type > aside > img:first-of-type",
//   {
//     y: 800,
//     duration: 15,
//     scrollTrigger: {
//       trigger: "article:nth-of-type(4) > div > h2",
//       start: "top top",
//       end: "top top",
//       toggleActions: "restart none none none",
//       scrub: 1,
//     },
//   }
// );

// gsap.to(
//   "article:nth-of-type(4) > article:first-of-type > aside > img:nth-of-type(2)",
//   {
//     y: 835,
//     duration: 15,
//     scrollTrigger: {
//       trigger: "article:nth-of-type(4) > div > h2",
//       start: "top top",
//       end: "top top",
//       toggleActions: "restart none none none",
//       scrub: 1,
//     },
//   }
// );

// gsap.to(
//   "article:nth-of-type(4) > article:first-of-type > aside > img:nth-of-type(3)",
//   {
//     y: 948,
//     duration: 15,
//     scrollTrigger: {
//       trigger: "article:nth-of-type(4) > div > h2",
//       start: "top top",
//       end: "top top",
//       toggleActions: "restart none none none",
//       scrub: 1,
//     },
//   }
// );

// gsap.to(
//   "article:nth-of-type(4) > article:first-of-type > aside > img:nth-of-type(4)",
//   {
//     y: 907,
//     duration: 15,
//     scrollTrigger: {
//       trigger: "article:nth-of-type(4) > div > h2",
//       start: "top top",
//       end: "top top",
//       toggleActions: "restart none none none",
//       scrub: 1,
//     },
//   }
// );

// gsap.to(
//   "article:nth-of-type(4) > article:first-of-type > aside > img:nth-of-type(5)",
//   {
//     y: 955,
//     duration: 15,
//     scrollTrigger: {
//       trigger: "article:nth-of-type(4) > div > h2",
//       start: "top top",
//       end: "top top",
//       toggleActions: "restart none none none",
//       scrub: 1,
//     },
//   }
// );

// gsap.to(
//   "article:nth-of-type(4) > article:first-of-type > aside > img:nth-of-type(6)",
//   {
//     y: 954,
//     duration: 15,
//     scrollTrigger: {
//       trigger: "article:nth-of-type(4) > div > h2",
//       start: "top top",
//       end: "top top",
//       toggleActions: "restart none none none",
//       scrub: 1,
//     },
//   }
// );

// gsap.to(
//   "article:nth-of-type(4) > article:first-of-type > aside > img:last-of-type",
//   {
//     y: 1030,
//     duration: 15,
//     scrollTrigger: {
//       trigger: "article:nth-of-type(4) > div > h2",
//       start: "top top",
//       end: "top top",
//       toggleActions: "restart none none none",
//       scrub: 1,
//     },
//   }
// );

// PROJECTEN
const projecten = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:first-of-type > button"
);
const projectenOverlay = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:first-of-type > article"
);
const projectenButton = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:first-of-type > article > button"
);

const projectenInfo = () => {
  projectenOverlay.classList.add("toonOverlay");
};
const projectenSluiten = () => {
  projectenOverlay.classList.remove(`toonOverlay`);
};

projecten.addEventListener(`click`, projectenInfo);
projectenButton.addEventListener(`click`, projectenSluiten);

// STAGES
const stages = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(2) > button"
);
const stagesOverlay = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(2) > article"
);
const stagesButton = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(2) > article > button"
);

const stagesInfo = () => {
  stagesOverlay.classList.add("toonOverlay");
};
const stagesSluiten = () => {
  stagesOverlay.classList.remove(`toonOverlay`);
};

stages.addEventListener(`click`, stagesInfo);
stagesButton.addEventListener(`click`, stagesSluiten);

// CMD Agency
const agency = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(3) > button"
);
const agencyOverlay = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(3) > article"
);
const agencyButton = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(3) > article > button"
);

const agencyInfo = () => {
  agencyOverlay.classList.add("toonOverlay");
};
const agencySluiten = () => {
  agencyOverlay.classList.remove(`toonOverlay`);
};

agency.addEventListener(`click`, agencyInfo);
agencyButton.addEventListener(`click`, agencySluiten);

// GASTCOLLEGES
const gastcolleges = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(4) > button"
);
const gastcollegesOverlay = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(4) > article"
);
const gastcollegesButton = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(4) > article > button"
);

const gastcollegesInfo = () => {
  gastcollegesOverlay.classList.add("toonOverlay");
};
const gastcollegesSluiten = () => {
  gastcollegesOverlay.classList.remove(`toonOverlay`);
};

gastcolleges.addEventListener(`click`, gastcollegesInfo);
gastcollegesButton.addEventListener(`click`, gastcollegesSluiten);

// OPLEIDINGSADVIESRAAD
const adviesraad = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(5) > button"
);
const adviesraadOverlay = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(5) > article"
);
const adviesraadButton = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(5) > article > button"
);

const adviesraadInfo = () => {
  adviesraadOverlay.classList.add("toonOverlay");
};
const adviesraadSluiten = () => {
  adviesraadOverlay.classList.remove(`toonOverlay`);
};

adviesraad.addEventListener(`click`, adviesraadInfo);
adviesraadButton.addEventListener(`click`, adviesraadSluiten);

// PiE
const pie = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(6) > button"
);
const pieOverlay = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(6) > article"
);
const pieButton = document.querySelector(
  "article:nth-of-type(4) > article:nth-of-type(3) > div > section > ul > li:nth-of-type(6) > article > button"
);

const pieInfo = () => {
  pieOverlay.classList.add("toonOverlay");
};
const pieSluiten = () => {
  pieOverlay.classList.remove(`toonOverlay`);
};

pie.addEventListener(`click`, pieInfo);
pieButton.addEventListener(`click`, pieSluiten);
