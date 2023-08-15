const mainSlide = new Swiper(".main_slide .swiper-container", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 1,
  // centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: false,
  loopAdditionalSlides: 1,
  breakpoints: {
    900: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".main_slide .pagination .swiper-pagination",
    clickable: true,
  },
});
const serviceSlide = new Swiper(".alliance_wrap .swiper-container", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const guideSlide = new Swiper(".guide_wrap .swiper-container", {
  direction: "horizontal",
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let count = 0;

$(".swiper-button-play").on("click", function () {
  count += 1;
  if (count % 2 == 1) {
    $(this).find("i").attr("class", "ico_play");
    mainSlide.autoplay.stop();
  } else {
    $(this).find("i").attr("class", "ico_stop");
    mainSlide.autoplay.start();
  }
});
