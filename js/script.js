const burger = document.getElementById('header_main_burger');
const mobMenuClose = document.getElementById('mob_menu_close');
const mobMenu = document.getElementById('mob_menu');

burger.addEventListener('click', () => {
   mobMenu.classList.add('active');
   document.body.classList.add('lock');
})

mobMenuClose.addEventListener('click', () => {
   mobMenu.classList.remove('active');
   document.body.classList.remove('lock');
})

//slider usually------------------
   const usually = new Swiper('.usually_row', {
      spaceBetween: 10,
      loop: true,
      // autoplay: true,
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