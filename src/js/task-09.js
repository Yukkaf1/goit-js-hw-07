function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}


const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('button[class="change-color"]'),
  span: document.querySelector('span[class="color"]')
}

const changeBgColor = (event) => {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
}



refs.button.addEventListener('click', changeBgColor)