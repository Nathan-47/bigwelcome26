const thumbsSwiper = new Swiper(".thumbsSwiper", {
  slidesPerView: "auto",
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  freeMode: true,

  slideToClickedSlide: true,

  breakpoints: {
    320: {
      slidesPerView: 2.2,
    },
    410: {
      slidesPerView: 2.5,
    },
    500: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 3.2,
    },
    600: {
      slidesPerView: 3.6,
    },
    803: {
      slidesPerView: 5,
    },
    990: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

const mainSwiper = new Swiper(".mainSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
  allowTouchMove: false,
});

{/* allows automatic slide to show clickable options on bottom nav */}
mainSwiper.on("slideChange", () => {
  thumbsSwiper.slideTo(Math.max(0, mainSwiper.activeIndex - 1));
});
