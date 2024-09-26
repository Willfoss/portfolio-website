const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.id;
    const activeLink = document.querySelector(`a[href*=${id}]`);
    activeLink.classList.remove("active");
    console.log(id);
    if (entry.isIntersecting) {
      activeLink.classList.add("active");
    } else {
      activeLink.classList.remove("active");
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

const sections = document.querySelectorAll("section");
sections.forEach((section) => navObserver.observe(section));
