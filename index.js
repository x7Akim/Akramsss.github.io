document.addEventListener("DOMContentLoaded", function () {
  var menuPage = document.querySelector(".menu-page");

  function slideUp() {
    menuPage.style.transform = "translateX(0)";
  }

  function goBack() {
    menuPage.style.transform = "translateX(-100vw)";
  }

  var menuButtons = document.querySelectorAll(".menu");
  menuButtons.forEach(function (img) {
    img.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the event from propagating to the document
      slideUp();
    });
  });

  // var closeButtons = document.querySelectorAll(".btn-img"); // Assuming .btn-img is your close button class
  // closeButtons.forEach(function (img) {
  //   img.addEventListener("click", function () {
  //     goBack();
  //   });
  // });

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
  var navItems = document.querySelectorAll(".nav-menu-m div");
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      smoothScroll("#" + targetId);
      goBack(); // Close the menu after clicking
    });
  });
  var navItems_1 = document.querySelectorAll(".item");
  navItems_1.forEach(function (item) {
    item.addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      smoothScroll("#" + targetId);
      goBack(); // Close the menu after clicking
    });
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
