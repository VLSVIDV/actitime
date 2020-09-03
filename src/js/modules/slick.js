

$(document).ready(function(){
    $('.slick-slider').slick({
        // variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 2500,
              settings: {
                slidesToShow: 2

              }
            },
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});




