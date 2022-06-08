var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  effect: "fade",
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// second slider js
$(document).ready(function () {
  $(".all4").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    items: 3,
    mousewheel: false,
    dots: true,
    slideBy: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      200: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      900: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
});
$(".section4__btnright").click(function () {
  var owl = $(".all4");
  owl.trigger("next.owl.carousel");
});
$(".section4__btnleft").click(function () {
  var owl = $(".all4");
  owl.trigger("prev.owl.carousel");
});

$("nav li").has("ul").addClass("header_icon");
