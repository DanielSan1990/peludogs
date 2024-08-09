document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
      document.documentElement.classList.add("dark");
      themeIcon?.classList.replace("fa-moon", "fa-sun");
    } else if (currentTheme == "light") {
      document.documentElement.classList.remove("dark");
      themeIcon?.classList.replace("fa-sun", "fa-moon");
    }

    themeToggleButton?.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        themeIcon?.classList.replace("fa-sun", "fa-moon");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        themeIcon?.classList.replace("fa-moon", "fa-sun");
      }
    });
  });