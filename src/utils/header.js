// src/scripts/header.js

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  const logo = document.getElementById("logo-mobile");
  const links = menu?.querySelectorAll("a");
  const offset = -100; // Ajusta este valor según lo que necesites

  menuButton?.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
    if (menu?.classList.contains("hidden")) {
      logo?.classList.remove("hidden");
    } else {
      logo?.classList.add("hidden");
    }
  });

  links?.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href")?.substring(1) || "";
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const sectionTop =
          targetSection.getBoundingClientRect().top +
          window.scrollY + // Reemplazado pageYOffset por scrollY
          offset;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
      // Ocultar el menú y mostrar el logotipo después de la navegación
      menu?.classList.add("hidden");
      logo?.classList.remove("hidden");
    });
  });
});

