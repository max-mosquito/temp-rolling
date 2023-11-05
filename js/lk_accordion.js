const lkAccordionHeaders = document.querySelectorAll('.lk_content_orders_accordion_header');
const laAccordionContent = document.querySelectorAll('.lk_content_orders_accordion_content');

function laAccordionNoActive() {
   lkAccordionHeaders.forEach(item => {
      item.classList.remove('active');
   })

   laAccordionContent.forEach(item => {
      item.classList.remove('active');
   })
}

lkAccordionHeaders.forEach((item, i) => {
   item.addEventListener('click', () => {
      laAccordionNoActive();
      item.classList.add('active');
      laAccordionContent[i].classList.add('active');
   })
})