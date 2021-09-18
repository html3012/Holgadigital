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
      slidesToShow: 1,
      adaptiveHeight: true,
   });

   $('.review-video__items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      arrows: false,
      // autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
         {
           breakpoint: 1199.90,
           settings: {
             slidesToShow: 3,
           }
         },
         {
           breakpoint: 879.90,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 599.90,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
   });

   Fancybox.bind("[data-fancybox]", {
      Toolbar: {
         display: [       
           { id: "close", position: "right" },
         ],
       },
    });


});