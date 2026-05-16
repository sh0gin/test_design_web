// SLIDER

const swiper = new Swiper(".gallery-slider", {

  loop: false,

  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    }
  }

});

// FAQ

const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(i => {
  const btn = i.querySelector('.faq-question');
  const icon = i.querySelector('.icon');

  btn.addEventListener('click', () => {
    i.classList.toggle('active');

    icon.textContent =
      i.classList.contains('active') ? '−' : '+';
  });
});


// POPUP

const popup = document.getElementById("popup");
const openPop = document.getElementById("open");
const closePop = document.getElementById("close");
const form = document.getElementById("booking-form");

openPop.addEventListener("click", (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    form.reportValidity();
  }
});

closePop.addEventListener("click", (e) => {
  e.preventDefault();
  closePopup();
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    closePopup();
  }
});

function closePopup() {
  popup.classList.remove("active");
  document.body.style.overflow = "";
}