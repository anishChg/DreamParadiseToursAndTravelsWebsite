$(document).ready(function () {
  $("#main_menu").on("show.bs.collapse", function () {
    // Do something when the menu is shown
  });

  $("#main_menu").on("hide.bs.collapse", function () {
    // Do something when the menu is hidden
  });

  // Toggle menu on icon click
  $(".navbar-toggler").click(function () {
    $("#main_menu").collapse("toggle");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openMenuBtn = document.querySelector(".open_menu");
  const closeMenuBtn = document.querySelector(".close_menu");
  const mainMenu = document.getElementById("main_menu");
  const overlay = document.querySelector(".overlay");

  openMenuBtn.addEventListener("click", function () {
    mainMenu.style.right = "0";
    overlay.style.display = "block";
  });

  closeMenuBtn.addEventListener("click", function () {
    mainMenu.style.right = "-250px";
    overlay.style.display = "none";
  });

  // Close menu when clicking outside the menu
  overlay.addEventListener("click", function () {
    mainMenu.style.right = "-250px";
    overlay.style.display = "none";
  });

  // Add/remove responsive class on window resize
  window.addEventListener("resize", function () {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (screenWidth <= 991) {
      mainMenu.classList.add("menu_responsive");
    } else {
      mainMenu.classList.remove("menu_responsive");
    }
  });
});

// SELECT 2
$(document).ready(function () {
  $("#mySelect").select2({
    placeholder: "Select an option",
    allowClear: true,
  });
});

// Search Container

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

document.addEventListener("DOMContentLoaded", () => {
  const achWrappers = document.querySelectorAll(".ach_wrapper");

  const options = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  achWrappers.forEach((achWrapper) => {
    observer.observe(achWrapper);
  });

  function startCounter(wrapper) {
    const counterElement = wrapper.querySelector(".ach_counter h4");
    const targetValue = parseInt(counterElement.innerText);
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue >= targetValue) {
        clearInterval(interval);
      } else {
        currentValue++;
        counterElement.innerText = currentValue + "%";
      }
    }, 20);
  }
});

// Features
var swiper = new Swiper(".feat_swipers", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   autoplay: false
  // },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// Activity
var swiper = new Swiper(".act_swipers", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   autoplay: false
  // },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


// Association 
var swiper = new Swiper(".asscSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   autoplay: true
  // },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});


// RELATED SLIDERS 
var swiper = new Swiper(".related_sliders", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    autoplay: false
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// TESTIMONIALS 
var swiper = new Swiper(".testi_swipers", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   autoplay: false
  // },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});