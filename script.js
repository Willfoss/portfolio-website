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

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.dir(entry);
    let id = entry.target.parentElement.id;
    if (id === "home-container") {
      id = entry.target.parentElement.parentElement.id;
    }
    const activeLink = document.querySelector(`a[href*=${id}]`);
    console.log(id);
    if (entry.isIntersecting) {
      activeLink.classList.add("active");
    } else {
      activeLink.classList.remove("active");
    }
  });
});

const sections = document.querySelectorAll(".section-heading");
sections.forEach((section) => navObserver.observe(section));
