//burger-----------------------
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

