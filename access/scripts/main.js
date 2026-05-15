console.log('file main.js is connected');

new Swiper(".gallery-slider", {

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
      slidesPerView: 1, // mobile
    },
    768: {
      slidesPerView: 3,
    }
  }

});