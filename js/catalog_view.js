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