// Toggle menu navbar saat klik
const menu = document.querySelector(".navbar-toggle");
const navlinks = document.querySelector(".navbar-list");

// Menambahkan event listener untuk klik pada menu navbar
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navlinks.classList.toggle("show");
});

// Menutup menu navbar ketika scrolling
window.addEventListener("scroll", () => {
  menu.classList.remove("active");
  navlinks.classList.remove("show");
});

// Menambahkan event listener untuk klik pada dropdown toggle
document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
  dropdownToggle.addEventListener("click", function () {
    const dropdownMenu = this.nextElementSibling; // Mendapatkan elemen menu dropdown
    // Toggle display dropdown (tampilkan/sembunyikan)
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });
});

// Menutup dropdown jika klik di luar dropdown
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.display = "none";
    });
  }
});
