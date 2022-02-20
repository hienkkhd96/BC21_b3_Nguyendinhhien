var testimonialThumbs = new Swiper(".testimonial-thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  freeMode: true,
  autoplay: false,
  loop: true,
  speed: 3000,
});
var testimonialContent = new Swiper(".testimonial-comment", {
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  speed: 3000,
  thumbs: {
    swiper: testimonialThumbs,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
$(".blogs__owl-carousel").owlCarousel({
  items: 3,
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 3000,
  dragEndSpeed: 3000,
  autoplayHoverPause: true,
});
$(".clients__carousel").owlCarousel({
  items: 6,
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 3000,
  dragEndSpeed: 3000,
  autoplayHoverPause: true,
});
$(window).on("load", function () {
  $(".loading").fadeOut("slow");
});
