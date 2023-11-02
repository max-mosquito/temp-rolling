const faqTitle = document.querySelectorAll('.faq_item_title');
const faqContent = document.querySelectorAll('.faq_item_content');

function faqNoActive() {
   faqTitle.forEach(item => {
      item.classList.remove('active');
   })

   faqContent.forEach(item => {
      item.classList.remove('active');
   })
}

faqTitle.forEach((item, i) => {
   item.addEventListener('click', () => {
      faqNoActive();
      item.classList.add('active');
      faqContent[i].classList.add('active');
   })
})