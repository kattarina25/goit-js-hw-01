const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userInput = prompt('Введите пароль');
if (userInput === null) {
    message = 'Отменено пользователем!';
} else {
  userInput = userInput.toLowerCase();
    message = ADMIN_PASSWORD === userInput ? 'Добро пожаловать!': 'Доступ запрещен, неверный пароль!';
  }
alert(message);