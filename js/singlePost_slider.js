//slider usually------------------
const usually = new Swiper('.singlePost_maybe_slider', {
   spaceBetween: 10,
   loop: true,
   autoplay: true,
   breakpoints: {
     300: {
       slidesPerView: 2.1,
     },
     767: {
       slidesPerView: 3,
     },
   }
 })