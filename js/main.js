// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const toggleMode = document.getElementById("toggleMode");

  // Menu hamburger
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Dark/Light Mode
  toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Changer l’icône
    if (document.body.classList.contains("dark")) {
      toggleMode.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleMode.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  // Charger le thème sauvegardé
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleMode.textContent = "☀️";
  }
});


// Pourquoi participer à l’Africonnect Summit ?
document.addEventListener("DOMContentLoaded", () => {
  const argumentsList = document.querySelectorAll(".argument");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // évite de relancer l’animation
      }
    });
  }, { threshold: 0.2 });

  argumentsList.forEach(arg => observer.observe(arg));
});

// Pour la partie programme
// Onglets
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach(c => c.classList.remove("active"));
    document.getElementById(tab.dataset.day).classList.add("active");
  });
});

// Animation au scroll
const themes = document.querySelectorAll(".theme");
window.addEventListener("scroll", () => {
  themes.forEach(theme => {
    const rect = theme.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      theme.classList.add("visible");
    }
  });
});