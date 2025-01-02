/*
  preloader
  slick slider
    slick fullscreen slideshow ZOOM/FADE
  fullPage
  owl carousel slider
    owl sections carousel slider
    owl works carousel slider
  magnificPopup
    magnificPopup works gallery
    magnificPopup works gallery slider
  swiper slider
    swiper slider
  navigation
    close navigation
  featured resources MORE
  featured resources MORE reset
*/

$(function () {
  "use strict";

  // preloader
  $("#preloader").fadeOut(800);
  $(".preloader-bg").delay(600).fadeOut(800);

  // slick slider
  // slick fullscreen slideshow ZOOM/FADE
  $(".slick-fullscreen-slideshow-zoom-fade").slick({
    arrows: false,
    initialSlide: 0,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    speed: 1600,
    draggable: true,
    dots: false,
    pauseOnDotsHover: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  // fullPage
  $("#fullpage").fullpage({
    anchors: ["home", "about", "works", "resources", "contact"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["Home", "About", "Works", "resources", "Contact"],
    responsiveWidth: 995,
    autoScrolling: true,
    scrollBar: false,
    afterResponsive: function (isResponsive) {},
  });

  // owl carousel slider
  // owl sections carousel slider
  $(
    "#about-section-carousel, #works-section-carousel, #resources-section-carousel, #contact-section-carousel"
  ).owlCarousel({
    loop: false,
    center: false,
    items: 1,
    margin: 0,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: true,
    navText: [
      "<i class='owl-custom ion-chevron-left'></i>",
      "<i class='owl-custom ion-chevron-right'></i>",
    ],
  });

  // owl works carousel slider
  $("#owl-carousel-works").owlCarousel({
    loop: false,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='owl-nav ion-chevron-left'></i>",
      "<i class='owl-nav ion-chevron-right'></i>",
    ],
    navContainer: ".owl-nav-custom-works",
    responsive: {
      0: {
        items: 1,
        margin: 25,
      },
      768: {
        items: 1,
        margin: 25,
      },
      980: {
        items: 1,
        margin: 50,
      },
      1240: {
        items: 1,
        margin: 50,
      },
    },
  });

  // magnificPopup
  // magnificPopup works gallery
  $(".popup-photo").magnificPopup({
    type: "image",
    gallery: {
      enabled: false,
      tPrev: "",
      tNext: "",
      tCounter: "%curr% / %total%",
    },
    removalDelay: 100,
    mainClass: "mfp-fade",
    fixedContentPos: false,
  });
  // magnificPopup works gallery slider
  $(".popup-photo-gallery").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
      removalDelay: 100,
      mainClass: "mfp-fade",
      fixedContentPos: false,
    });
  });

  // swiper slider
  var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
    preloadImages: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    init: true,
    loop: false,
    speed: 1200,
    grabCursor: true,
    mousewheel: false,
    keyboard: true,
    simulateTouch: true,
    parallax: true,
    effect: "slide",
    pagination: {
      el: ".swiper-slide-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide-next",
      prevEl: ".slide-prev",
    },
  });
  swiper.on("slideChangeTransitionStart", function () {
    $(".slider-progress-bar").removeClass("slider-active");
    $(".hero-bg")
      .find("video")
      .each(function () {
        this.pause();
      });
  });
  swiper.on("slideChangeTransitionEnd", function () {
    $(".slider-progress-bar").addClass("slider-active");
    $(".hero-bg")
      .find("video")
      .each(function () {
        this.play();
      });
  });
  swiper.on("slideChangeTransitionStart", function () {
    $(".slider-progress-bar").removeClass("slider-active");
  });
  swiper.on("slideChangeTransitionEnd", function () {
    $(".slider-progress-bar").addClass("slider-active");
  });
  var playButton = $(".swiper-slide-controls-play-pause-wrapper");

  function autoEnd() {
    playButton.removeClass("slider-on-off");
    swiper.autoplay.stop();
  }
  function autoStart() {
    playButton.addClass("slider-on-off");
    swiper.autoplay.start();
  }
  playButton.on("click", function () {
    if (playButton.hasClass("slider-on-off")) autoEnd();
    else autoStart();
    return false;
  });

  // navigation
  // close navigation
  $(".menu-nav").on("click", function () {
    $("#menu-mobile").removeClass("activated");
    $("#menu-mobile-caller").removeClass("lines-close");
  });

  // featured resources MORE
  $(".button-the").on("click", function () {
    var divClass = $(this).attr("data-id");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("." + divClass).addClass("open");
    } else {
      $(this).addClass("open");
      $("." + divClass).addClass("open");
    }
  });
  $(".resources-closer, .to-top-arrow, .navigation-icon").on(
    "click",
    function () {
      $(".panel-left, .panel-right").removeClass("open");
    }
  );
});

// featured resources MORE reset
$(".button-the, .resources-closer").on("click", function () {
  target = $(".resources-reset");
  $("html, body").animate(
    {
      scrollTop: target.offset().top - 0,
    },
    500
  );
});
