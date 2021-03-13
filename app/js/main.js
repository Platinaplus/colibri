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


    $(".photos__link, .link").on(
      "click",
      function (e) {
        e.preventDefault();
        const id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
      }
    );

    $("form").submit(function() {
      let th = $(this);
      $.ajax({
        type: "POST",
        url: "send.php",
        data: th.serialize()
      }).done(function() {
        Swal.fire(
          'Отлично!',
          'Мы с Вами свяжемся!',
          'success'
        );
        setTimeout(function() {
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  
});