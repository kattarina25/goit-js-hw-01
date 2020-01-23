const total = 100;
let ordered = 50;
const messageAcceptance = 'Заказ оформлен, с вами свяжется менеджер';
const messageFailure = 'На складе недостаточно товаров!';
console.log(ordered > 0 && ordered <= total ? `${ordered} - ${messageAcceptance}`
: `${ordered}- ${messageFailure}`);
ordered = 20;
console.log(ordered > 0 && ordered <= total ? `${ordered} - ${messageAcceptance}`
: `${ordered}- ${messageFailure}`);
ordered = 80;
console.log(ordered > 0 && ordered <= total ? `${ordered} - ${messageAcceptance}`
: `${ordered}- ${messageFailure}`);
ordered = 130;
console.log(ordered > 0 && ordered <= total ? `${ordered} - ${messageAcceptance}`
: `${ordered} - ${messageFailure}`);



