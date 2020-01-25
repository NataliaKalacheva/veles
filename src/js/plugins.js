$(document).ready(function() {
  $(".intro__slider").slick({
    prevArrow: ".arrow__prev",
    nextArrow: ".arrow__next",
    dots: true,
    infinite: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    speed: 300
  });
});

$(document).ready(function() {
  $(".additional__slider").slick({
    arrows: true,
    prevArrow: ".additional__prev",
    nextArrow: ".additional__next",
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
