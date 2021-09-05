$(function () {
   $('.btn-burger').on('click', function() {
    $('.btn-burger__line').toggleClass('btn-burger__line--active');
    $('.header__menu').toggleClass('header__manu--active');
    $('body').toggleClass('lock');
   });

   let hero = $('.hero'),
      scrollPos = $(window).scrollTop(),
      heroH = hero.innerHeight();

   $(window).on('scroll load resize', function () {
      heroH = hero.innerHeight();
      scrollPos = $(this).scrollTop();
   if(scrollPos > heroH - 300) {
      $('.header').addClass('header--fixed');
      } else {
         $('.header').removeClass('header--fixed');
      }
   });
});