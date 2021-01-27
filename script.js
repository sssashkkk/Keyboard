let letters = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let space = document.querySelector('.space');
let clear = document.querySelector('.clear');

for (let letter of letters) { 
  letter.onclick = function () {
  display.textContent = display.textContent + letter.textContent;
  };
}

clear.onclick = function () {
  display.textContent = '';
};