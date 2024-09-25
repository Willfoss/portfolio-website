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
