// view----------------
const viewCards = document.getElementById('view_cards');
const viewList = document.getElementById('view_list');
const catalogContentView = document.getElementById('catalogContentView')

viewCards.addEventListener('click', () => {
   viewList.classList.remove('active');
   viewCards.classList.add('active');
   catalogContentView.classList.remove('list');
})

viewList.addEventListener('click', () => {
   viewCards.classList.remove('active');
   viewList.classList.add('active');
   catalogContentView.classList.add('list');
})

//dropdown-------------------------
const catalogDropdownBtn = document.querySelector('.catalog_main_header_sort_current_btn');
const catalogDropdownMenu = document.querySelector('.catalog_main_header_sort_dropdown');

catalogDropdownBtn.addEventListener('click', () => {
   catalogDropdownMenu.classList.add('active')
})

catalogDropdownMenu.addEventListener('click', () => {
   catalogDropdownMenu.classList.remove('active')
})