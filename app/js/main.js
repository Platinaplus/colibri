$(function () {
  $('.feedback__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    appendArrows: $(".feedback__slider"),
    prevArrow:
    '<button type="button"class="feedback__btn feedback__btn--prev"></button>',
    nextArrow:
      '<button type="button"class="feedback__btn feedback__btn--next"></button>',
  })


    $(".hero__link").on(
      "click",
      function (e) {
        e.preventDefault();
        const id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
      }
    );
  
})