const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".work-card");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.filter;

    cards.forEach(card => {
      const match = category === "all" || card.dataset.category === category;
      card.classList.toggle("hidden", !match);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();
