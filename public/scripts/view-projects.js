import { projects } from "./projects.js";

// View Projects
const viewProjects = [...document.querySelectorAll(".view-btn")];
const caseStudies = [...document.querySelectorAll(".case-study")];
const project = document.querySelector("#project");
const closeProject = document.querySelector("#close-project");
const projectName = document.querySelector("#project-name");
const projectCopy = document.querySelector("#project-copy");
const projectSkills = document.querySelector("#project-skills");
const projectLangs = document.querySelector("#project-langs");
const backgroundCopy = document.querySelector("#background-copy");
const projectWebsite = document.querySelector("#project-website");
const projectCode = document.querySelector("#project-code");
const leftCarousel = document.querySelector("#left-carousel");
const rightCarousel = document.querySelector("#right-carousel");
const leftCarouselProject = document.querySelector("#left-carousel-project");
const rightCarouselProject = document.querySelector("#right-carousel-project");
const projectImage = document.querySelector("#project-img");
const previewOne = document.querySelector("#preview-1");
const previewTwo = document.querySelector("#preview-2");
const caseImage = [...document.querySelectorAll(".case-img")];
const caseHead = [...document.querySelectorAll(".case-head")];
const caseCopy = [...document.querySelectorAll(".case-copy")];

let index;
let y;

caseImage.forEach((x, idx) => {
  x.style.backgroundImage = `url("../assets/images/${projects[idx].preview1}")`
  x.style.backgroundSize = `cover`
  x.style.backgroundPosition = `center`
});

caseHead.forEach((x, idx) => {
  x.textContent = projects[idx].name;
});

caseCopy.forEach((x, idx) => {
  x.textContent = projects[idx].overview
});

viewProjects.forEach((btn) =>
  btn.addEventListener("click", () => {
    index = viewProjects.indexOf(btn);
    y = window.scrollY;
    caseStudies.forEach((study) => study.classList.add("hidden"));
    project.className = "grid";
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
    populate();
  })
);

closeProject.addEventListener("click", () => {
  caseStudies.forEach((study) => study.classList.remove("hidden"));
  project.classList.remove("grid");
  window.scrollTo({
    top: y,
    behaviour: "smooth",
  });
});

leftCarousel.addEventListener("click", () => {
  index == 0 ? (index = viewProjects.length - 1) : index--;
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
  populate();
});

rightCarousel.addEventListener("click", () => {
  index == viewProjects.length - 1 ? (index = 0) : index++;
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
  populate();
});

// Populate from projects objects
let populate = () => {
  projectName.innerHTML = projects[index].name;
  projectCopy.innerHTML = projects[index].overview;
  projectSkills.innerHTML = projects[index].skills;
  projectLangs.innerHTML = projects[index].langs;
  backgroundCopy.innerHTML = projects[index].background;

  projectWebsite.href = projects[index].heroku;
  projectCode.href = projects[index].github;

  index == 0
    ? (leftCarouselProject.innerHTML = projects[viewProjects.length - 1].name)
    : (leftCarouselProject.innerHTML = projects[index - 1].name);
  index == viewProjects.length - 1
    ? (rightCarouselProject.innerHTML = projects[0].name)
    : (rightCarouselProject.innerHTML = projects[index + 1].name);

  projectImage.style.backgroundImage = `url("../assets/images/${projects[index].banner}")`;
  projectImage.style.backgroundSize = `cover`;
  projectImage.style.backgroundPosition = `center`;

  previewOne.style.backgroundImage = `url("../assets/images/${projects[index].preview1}")`;
  previewOne.style.backgroundSize = `cover`;
  previewOne.style.backgroundPosition = `center`;

  previewTwo.style.backgroundImage = `url("../assets/images/${projects[index].preview2}")`;
  previewTwo.style.backgroundSize = `cover`;
  previewTwo.style.backgroundPosition = `center`;
};

export { viewProjects, closeProject, leftCarousel, rightCarousel, caseImage, caseHead, caseCopy };
