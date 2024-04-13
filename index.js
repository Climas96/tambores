const botones = document.querySelectorAll('.drum');

botones.forEach((boton, i) => {
  boton.addEventListener('click', function () {
    let audio;
    this.style.color = 'green';
    const letra = this.innerHTML;
    console.log(letra);
    switch (letra) {
      case 'w':
        audio = new Audio(`./sounds/crash.mp3`);

        break;
      case 'a':
        audio = new Audio(`./sounds/kick-bass.mp3`);
        break;
      case 's':
        audio = new Audio(`./sounds/snare.mp3`);
        break;
      case 'd':
        audio = new Audio(`./sounds/tom-1.mp3`);
        break;
      case 'j':
        audio = new Audio(`./sounds/tom-2.mp3`);
        break;
      case 'k':
        audio = new Audio(`./sounds/tom-3.mp3`);
        break;
      case 'l':
        audio = new Audio(`./sounds/tom-4.mp3`);
        break;
      default:
        break;
    }
    audio.play();
    // const audio = new Audio(`./sounds/tom-${i}.mp3`);
    // audio.play();
  });
});

// => metodo forEach()
// const arr = ['a', 'b', 'c'];
// arr.forEach((letra, ind, arr) => console.log({ letra, ind, arr }));

// ----137. Higher Order Functions and Passing Functions as Arguments-----
// calculator
// const add = function (num1, num2) {
//   return num1 + num2;
// };

// const multiply = function (num1, num2) {
//   return num1 * num2;
// };

// const calculator = function (num1, num2, operator) {
//   return operator(num1, num2, add);
// };

// console.log(calculator(8, 5, multiply));
