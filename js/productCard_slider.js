const productCardSlider = new Swiper('.productCard_recomend_slider', {
   
   loop: true,
   // slidesPerView: 1,
   // spaceBetween: 17,
 
   breakpoints: {
      '300': {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      '575': {
         slidesPerView: 2.5,
         spaceBetween: 15,
       },
       '767': {
         slidesPerView: 3.1,
       },
       '991': {
         slidesPerView: 4,
         spaceBetween: 17,
       },
    },

   navigation: {
     nextEl: '.productCard_recomend_slider_button_next',
     prevEl: '.productCard_recomend_slider_button_prev',
   },
 });
 