document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("check"); // Mobile menu checkbox
  const email = "padmanapananandan@gmail.com";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const emailLink = document.getElementById("email-link");

  // Set the email link dynamically based on device type
  if (isMobile) {
      emailLink.setAttribute("href", `mailto:${email}`);
  } else {
      emailLink.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default action
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, "_blank");
      });
  }

  // Select all menu links inside the navigation
  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
              target.scrollIntoView({ behavior: "smooth" });
          }

          // Hide mobile menu after clicking a link
          if (checkbox) {
              setTimeout(() => {
                  checkbox.checked = false; // Delay helps ensure smooth scroll completes
              }, 200);
          }
      });
  });
});
