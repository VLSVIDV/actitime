$(document).ready(function () {
  $(".slick-slider").slick({
    // variableWidth: true,
    arrows: false,
    dots: true,
    rows: 0,
    mobileFirst: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
