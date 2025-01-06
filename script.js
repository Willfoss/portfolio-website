//home page and about me animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const leftEntryElements = document.querySelectorAll(".left-entry");
leftEntryElements.forEach((element) => observer.observe(element));

const rightEntryElements = document.querySelectorAll(".right-entry");
rightEntryElements.forEach((element) => observer.observe(element));

const bottomEntryElements = document.querySelectorAll(".bottom-entry");
bottomEntryElements.forEach((element) => observer.observe(element));

const skillsEntryElements = document.querySelectorAll(".skills-entry");
skillsEntryElements.forEach((element) => observer.observe(element));

const aboutMeEntry = document.querySelectorAll(".about-me-entry");
aboutMeEntry.forEach((element) => observer.observe(element));
// nav links update depending on which section is selected

const options = {
  threshold: 0.25,
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
      let currentActive = document.querySelector("nav a.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      let newActive = document.getElementsByClassName(entry.target.id);
      let newActiveElement = newActive[0];
      newActiveElement.classList.add("active");
    }
  });
};

const navObserver = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll(".section");
sections.forEach((section) => navObserver.observe(section));

//nav menu turns to hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-item");
navLink.forEach((nav) => nav.addEventListener("click", closeMenu));

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//form checks

const inputs = document.querySelectorAll(".form-input");
const submitButton = document.querySelector(".form-submit");

submitButton.addEventListener("click", formValidation);

function formValidation() {
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("invalid-form-input");
    } else {
      input.classList.remove("invalid-form-input");
    }
  });
}
