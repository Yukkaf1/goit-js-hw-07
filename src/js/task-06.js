const imputEl = document.querySelector('input[id="validation-input"]');
const symbol = Number(imputEl.dataset.length)


imputEl.addEventListener('blur', countSymbolImput);

function countSymbolImput (event) {
   if( event.currentTarget.value.length === symbol ) {
      imputEl.classList.remove('invalid')
      imputEl.classList.add('valid')
   }
   else {
      imputEl.classList.add('invalid')
      imputEl.classList.remove('valid')
   }
};