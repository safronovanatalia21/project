let title = "Пункт выдачи заказов";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500.0;
let rollback = 5;
let fullPrice = 700.0;
let adaptive = true;

console.log("title", title);
console.log("fullPrice", fullPrice);
console.log("adaptive", adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(","));
console.log(
    "Процент отката посреднику за работу " +
    fullPrice * (rollback / 100) +
    " рублей"
);