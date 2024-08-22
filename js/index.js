$(".slide-san-pham").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".slide-san-pham .slick-arrow").addClass("btn");
$(".slide-san-pham .slick-next").html(
  '<i class="fa-solid fa-chevron-right"></i>'
);
$(".slide-san-pham .slick-prev").html(
  '<i class="fa-solid fa-chevron-left"></i>'
);

window.addEventListener("resize", function () {
  $(".slide-san-pham .slick-arrow").addClass("btn");
  $(".slide-san-pham .slick-next").html(
    '<i class="fa-solid fa-chevron-right"></i>'
  );
  $(".slide-san-pham .slick-prev").html(
    '<i class="fa-solid fa-chevron-left"></i>'
  );
});

$(".dt_logo").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".dt_logo .slick-arrow").addClass("btn");
$(".dt_logo .slick-next").html('<i class="fa-solid fa-chevron-right"></i>');
$(".dt_logo .slick-prev").html('<i class="fa-solid fa-chevron-left"></i>');

window.addEventListener("resize", function () {
  $(".dt_logo .slick-arrow").addClass("btn");
  $(".dt_logo .slick-next").html('<i class="fa-solid fa-chevron-right"></i>');
  $(".dt_logo .slick-prev").html('<i class="fa-solid fa-chevron-left"></i>');
});
