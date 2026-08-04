const thumbsSwiper = new Swiper(".thumbsSwiper", {
  slidesPerView: 6,
spaceBetween: 0,
  watchSlidesProgress: true,

  freeMode: true,

  slideToClickedSlide: true,

  breakpoints: {
  200: {
    slidesPerView: 2,
  },
  300: {
    slidesPerView: 2,
  },
  310: {
    slidesPerView: 2.5
  },
  400: {
    slidesPerView: 2.5,
  },
  500: {
    slidesPerView: 3,
  },
  576: {
    slidesPerView: 2.5,
  },
  600: {
    slidesPerView: 3.2,
  },
  803: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 6,
  },
}
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
function moveSlide() {
    let previousIndex = 0;
    
    mainSwiper.on("slideChange", () => {

    if (mainSwiper.activeIndex > previousIndex) {
        // Moving forwards
        thumbsSwiper.slideTo(mainSwiper.activeIndex);
    } else {
        // Moving backwards
        thumbsSwiper.slideTo(Math.max(mainSwiper.activeIndex - 1, 0));
    }

    previousIndex = mainSwiper.activeIndex;
});
}

moveSlide();