//slider usually------------------
const usually = new Swiper('.usually_row', {
   spaceBetween: 10,
   loop: true,
   autoplay: true,
   breakpoints: {
     300: {
       slidesPerView: 1.2,
     },
     440: {
       slidesPerView: 1.75,
     },
     575: {
       slidesPerView: 2.5,
     },
     767: {
       slidesPerView: 3,
     },
     991: {
      slidesPerView: 4,
    }
   }
 })