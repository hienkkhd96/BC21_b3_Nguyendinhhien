var testimonialThumbs = new Swiper(".testimonial-thumbs", {
  loop: true,
  slidesPerView: 3,
  nav: true,
  autoplaySpeed: 3000,
  centeredSlides: true,
  speed: 3000,
  autoplay: true,
  dots: false,
});
var testimonialContent = new Swiper(".testimonial-comment", {
  loop: true,
  margin: 0,
  nav: true,
  autoplaySpeed: 3000,
  speed: 3000,
  autoplay: true,
  dots: true,
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
