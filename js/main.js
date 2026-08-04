// Active Life Support Services — shared behaviour

document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var menuClose = document.querySelector("[data-menu-close]");
  var mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }

  if (menuClose && mobileMenu) {
    menuClose.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  var submenuToggle = document.querySelector("[data-submenu-toggle]");
  var submenu = document.querySelector("[data-submenu]");

  if (submenuToggle && submenu) {
    submenuToggle.addEventListener("click", function () {
      submenu.classList.toggle("open");
      submenuToggle.classList.toggle("active");
    });
  }

  // Contact form: shows a local success message.
  // TODO: replace this handler with a real submission — e.g. point the
  // <form> at a Formspree/Netlify Forms endpoint, or POST to your own
  // email API — once hosting is set up.
  var contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var successMessage = document.querySelector("[data-form-success]");
      if (successMessage) {
        successMessage.classList.add("visible");
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      contactForm.reset();
    });
  }
});
