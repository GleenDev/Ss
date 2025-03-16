// Toggle menu untuk mobile
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Toggle Mode Gelap & Terang
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
});

// Tombol Scroll ke Atas
const scrollToTop = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    scrollToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
