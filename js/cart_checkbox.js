const cartCheckboxInputs = document.querySelectorAll('.checkbox');

cartCheckboxInputs.forEach(item => {
   item.addEventListener('click', () => {
      item.parentElement.classList.toggle('active');
      if(item.checked){
         console.log(111);
         item.parentElement.classList.add('active');
      }else{
         console.log(222);
         item.parentElement.classList.remove('active');
      }
   })
})