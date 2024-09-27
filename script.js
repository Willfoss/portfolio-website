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

// nav link updates

const options = {
  threshold: 0.5,
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
      console.log(entry.target);
      let currentActive = document.querySelector("nav a.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }
      let newActive = document.getElementsByClassName(entry.target.id);
      let newActiveElement = newActive[0];
      console.log(newActive);
      newActiveElement.classList.add("active");
    }
  });
};

const navObserver = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll(".section");
sections.forEach((section) => navObserver.observe(section));
