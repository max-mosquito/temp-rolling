const calcDropdownHeader = document.getElementById('calc_dropdownHeader');
const calcDropdownList = document.getElementById('calc_dropdownList');

calcDropdownHeader.addEventListener('click', () => {
   calcDropdownList.classList.toggle('active');
})

// calcDropdownList.addEventListener('click', () => {
//    calcDropdownList.classList.remove('active');
//    console.log(111);
// })