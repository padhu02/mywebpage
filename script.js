// Smooth scrolling for all anchor links
    document.addEventListener("DOMContentLoaded", function () {
        const checkbox = document.getElementById("check");
        const menuLinks = document.querySelectorAll("nav ul li a");

        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                checkbox.checked = false; // Hide menu after clicking
            });
        });
    });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});