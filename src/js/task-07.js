const imputEl = document.querySelector('input[id="font-size-control"]');
const text = document.getElementById('text')
imputEl.addEventListener('input', controlFontImput);

function controlFontImput (event) {
    text.style.fontSize = `${event.target.value}px`;
}