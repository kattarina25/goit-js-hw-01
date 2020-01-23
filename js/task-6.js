let total = 0;
let userInput;
while (userInput !== null) {
    userInput = prompt('Введите число');
  if (Number.isNaN(Number.parseInt(userInput))) {
    if (userInput !== null) {
      alert('Было введено не число, попробуйте еще раз');
    }
  } else {
    total += Number.parseInt(userInput);
  }
}
alert(`Общая сумма равна ${total}`);