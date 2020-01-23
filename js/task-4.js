const credits = 23580;
const pricePerDroid = 3000;
let message;
let userInput = prompt('Пожалуйста, укажите количество дроидов, которое желаете приобрести.');
if (userInput === null) {
    message = 'Отменено пользователем!';
} else if (Number.isNaN(Number.parseInt(userInput))) {
    message = 'Ошибка ввода данных';
} else {
    const totalPrice = pricePerDroid * userInput;
    message = totalPrice > credits ? 'Недостаточно средств на счету!' : `Вы купили ${userInput} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
}
console.log(message);