const swiper = new Swiper('.leaders_slider', {
   // Default parameters
   slidesPerView: 3,
   spaceBetween: 20,
   loop: true,
   
   breakpoints: {
      767: {
         slidesPerView: 1.8,
       },
      880: {
         slidesPerView: 2.3,
       },
      991: {
         slidesPerView: 2.5,
       },
     1124: {
       slidesPerView: 2.8,
     },
   },
   navigation: {
    nextEl: '.leaders_swiper_button_prev',
    prevEl: '.leaders_swiper_button_next',
  },
 })
 