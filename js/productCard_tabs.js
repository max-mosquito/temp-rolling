const productCardTabsHeaders = document.querySelectorAll('.productCard_tabs_headers_item');
const productCardTabsContent = document.querySelectorAll('.productCard_tabs_content_item');

function tabsNoActive() {
   productCardTabsHeaders.forEach(item => {
      item.classList.remove('active')
   })

   productCardTabsContent.forEach(item => {
      item.classList.remove('active')
   })
}

productCardTabsHeaders.forEach((item, i) => {
   item.addEventListener('click', () => {
      tabsNoActive();
      item.classList.add('active');
      productCardTabsContent[i].classList.add('active');
   })
})