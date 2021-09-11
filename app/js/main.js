$(function () {
   
   let hero = $('.hero'),
      scrollPos = $(window).scrollTop(),
      heroH = hero.innerHeight();

   $(window).on('scroll load resize', function () {
      heroH = hero.innerHeight();
      scrollPos = $(this).scrollTop();
      if (scrollPos > heroH - 200) {
         $('.header').addClass('header--fixed');
      } else {
         $('.header').removeClass('header--fixed');
      }
   });

   
   $('.review__slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
   });

   $('.review-video__items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      arrows: false,
      // autoplay: true,
      autoplaySpeed: 2000,
   });


});