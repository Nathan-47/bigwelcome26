function resetHeight() {
    mainSwiper.on("slideChange", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
        thumbsSwiper.slideTo(mainSwiper.activeIndex);
    });
}

resetHeight();