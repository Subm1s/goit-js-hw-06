function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonForChange = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.color');
console.log(buttonForChange);
console.log(backgroundColor);

buttonForChange.addEventListener('click', () => {
  const color = getRandomHexColor();
  backgroundColor.textContent = color;
  document.body.style.background = color;
})