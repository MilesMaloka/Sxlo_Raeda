document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  });
    //Dark button theme
    document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const htmlEl = document.documentElement;

    // Default to dark if no preference saved
    if (!localStorage.getItem("theme")) {
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (localStorage.getItem("theme") === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }

    toggleBtn.addEventListener("click", () => {
      htmlEl.classList.toggle("dark");
      localStorage.setItem("theme", htmlEl.classList.contains("dark") ? "dark" : "light");
    });
  });
    //   Gallery
        const carousel = document.getElementById('cardCarousel');
        function scrollCarousel(direction) {
        const scrollAmount = 300;
        carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
   //Navbar