const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load the saved theme, if there is one
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  toggleBtn.textContent = "☀️";
}

// Switch theme when the button is clicked
toggleBtn.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});