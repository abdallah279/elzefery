// loader js
$(window).on("load", function () {
  $(".loader-container").delay(300).fadeOut(1000);
});

// Add Sticky Header
window.addEventListener('scroll', function () {
  var header = document.querySelector('.page-navbar');
  header.classList.toggle('scroll', window.pageYOffset > 100);
});

// SideBar
$(".side-open").on("click", function () {
  $(".links").addClass("active");
  $(".overlay-m").fadeIn(500);
});

// SideBar
$(".overlay-m").on("click", function () {
  $(".links").removeClass("active");
  $(".overlay-m").fadeOut(500);
});

let isRtl = $('html[lang="ar"]').length > 0;

// Active Link
$(".page-navbar .links .link").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

/******************* count up *******************/
if ($(".num").length > 0) {
  $(".num").countUp();
}

/******************* wow js *******************/
new WOW().init();

/******************* All Sliders *******************/
$(document).ready(function () {

  /************ services Carousel ***********/
  let isRtl = $('html[lang="ar"]').length > 0;
  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    animateOut: "fadeOut",
    rtl: isRtl,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
  });

  /************ services Carousel ***********/
  $(".services-slider").owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i>`,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
    responsive: {
      991: {
        items: 3,
      },
      560: {
        items: 2,
      },
    },
  });

  /************ Clients Carousel ***********/
  const owlclients = $(".clients-slider");

  owlclients.on("changed.owl.carousel", function (event) {
    setTimeout(() => {
      owlclients.find(".owl-stage-outer").addClass("py-3");
    }, 0.1);
  });
  owlclients.owlCarousel({
    items: 2,
    loop: true,
    rtl: isRtl,
    margin: 35,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 2800,
    autoplaySpeed: 2800,
    autoplayHoverPause: true,
    responsive: {
      1000: {
        items: 6,
      },
      800: {
        items: 4,
      },
      400: {
        items: 3,
        margin: 20,
      },
    },
  });

  /************ customers Carousel ***********/
  const owlCustomers = $(".customers-slider");

  owlCustomers.owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i>`,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
  });
});

/************ faq Collapse ***********/
$(document).ready(function () {
  $('.faq-open').click(function (e) {
    e.preventDefault()
    if ($(this).parent('.faq-collapse').hasClass('active')) {
      $(this).next(".faq-content").slideUp();
      $(this).parent('.faq-collapse').removeClass('active');
    } else {
      $('.faq-collapse').removeClass('active');
      $('.faq-content').slideUp();
      $(this).parent('.faq-collapse').addClass('active');
      $(this).next('.faq-content').slideDown();
    }
  })
});

