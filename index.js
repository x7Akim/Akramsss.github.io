document.addEventListener("DOMContentLoaded", function () {
  var menuPage = document.querySelector(".menu-page");

  function slideUp() {
    menuPage.style.transform = "translateX(0vw)";
  }

  function goBack() {
    menuPage.style.transform = "translateX(-150vw)";
  }

  var menuButtons = document.querySelectorAll(".menu");
  menuButtons.forEach(function (img) {
    img.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the event from propagating to the document
      slideUp();
    });
  });

  //   var closeButtons = document.querySelectorAll(".btn-img"); // Assuming .btn-img is your close button class
  //   closeButtons.forEach(function (content) {
  //     content.addEventListener("click", function () {
  //       goBack();
  //     });
  //   });

  document.addEventListener("click", function (event) {
    if (!menuPage.contains(event.target)) {
      goBack();
    }
  });

  menuPage.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent clicks inside the menu from closing it
  });

  // Smooth scroll function
  function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  }

  // Adding event listeners to menu items
  //   var navItems = document.querySelectorAll(".nav-menu-m div");
  //   navItems.forEach(function (item) {
  //     item.addEventListener("click", function () {
  //       var targetId = this.getAttribute("data-target");
  //       smoothScroll("#" + targetId);
  //       goBack(); // Close the menu after clicking
  //     });
  //   });

  var navItems = document.querySelectorAll(".nav-menu-m div");
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      smoothScroll("#" + targetId);
      goBack(); // Close the menu after clicking
      // Change color of the clicked item
      navItems.forEach(function (navItem) {
        navItem.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  var navItems_1 = document.querySelectorAll(".item");
  navItems_1.forEach(function (item) {
    item.addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      smoothScroll("#" + targetId);
      goBack(); // Close the menu after clicking
      navItems_1.forEach(function (navItem) {
        navItem.classList.remove("active1");
      });
      this.classList.add("active1");
    });
  });

  // IntersectionObserver to highlight menu items on scroll
  const sections = document.querySelectorAll(".section");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((navItem) => {
          navItem.classList.remove("active");
          if (navItem.getAttribute("data-target") === entry.target.id) {
            navItem.classList.add("active");
          }
        });
        navItems_1.forEach((navItem) => {
          navItem.classList.remove("active1");
          if (navItem.getAttribute("data-target") === entry.target.id) {
            navItem.classList.add("active1");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// ----------------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".animated-input-1");
  const textarea = document.getElementById("messageInput");
  inputs.forEach((input) => {
    const label = input.nextElementSibling;

    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        label.classList.add("has-value");
      } else {
        label.classList.remove("has-value");
      }
    });
  });
  textarea.addEventListener("input", function () {
    const text = textarea.value;
    const length = text.length;

    if (length <= 200) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = textarea.scrollHeight + "px"; // Set height based on content

      if (length > 0) {
        label.classList.add("has-value");
      } else {
        label.classList.remove("has-value");
      }
    } else {
      textarea.value = text.substring(0, 200); // Limiting to 200 characters
    }
  });
});
