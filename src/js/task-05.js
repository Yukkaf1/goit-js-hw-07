const imputEl = document.querySelector('input[id="name-input"]');
const outputEl = document.querySelector('span[id="name-output"]');
// console.log(imputEl);
// console.log(outputEl);

// console.log(imputEl.currentTarget);

imputEl.addEventListener('input', onImput);


function onImput (event) {
outputEl.textContent = event.currentTarget.value;
// console.log(event.currentTarget);
if (event.currentTarget.value === '') {
    outputEl.textContent = "Anonymous";
}
};