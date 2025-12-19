document.addEventListener("DOMContentLoaded", () => {
  // Menu Mobile
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");
    // Alternar ícone (opcional)
    const icon = menuBtn.querySelector("i");
    if (navLinks.classList.contains("mobile-active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Rolagem suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.classList.remove("mobile-active"); // Fecha menu ao clicar
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animação ao rolar (Scroll Reveal)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});
