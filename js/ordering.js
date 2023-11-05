const orderingBtnsOne = document.querySelectorAll('.ordering_stage_btn_one');
const orderingFormsOne = document.querySelectorAll('.ordering_inputs');

function reset1() {
   orderingBtnsOne.forEach((item, i) => {
         item.classList.remove('active');
   })

   orderingFormsOne.forEach((item, i) => {
      item.classList.remove('active');
})
}

orderingBtnsOne.forEach((item, i) => {
   item.addEventListener('click', () => {
      reset1();
      item.classList.add('active');
      orderingFormsOne[i].classList.add('active');
   })
})