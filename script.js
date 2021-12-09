let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);
let screenPrice = +prompt("Сколько будет стоить данная работа?");

let fullPrice = 0.0;
let rollback = (5 * fullPrice) / 100;
let adaptive = prompt("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");

let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");
fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);
switch (fullPrice) {
    case fullPrice > 30000:
        console.log("Даем скидку в 10%");
        break;
    case fullPrice <= 30000 && fullPrice >= 15000:
        console.log("Даем скидку в 5%");
        break;
    case fullPrice < 15000 && fullPrice >= 0:
        console.log("Скидка не предусмотрена");
        break;
    case fullPrice < 0:
        console.log("Что-то пошло не так");
        break;
}

console.log("title", title);
console.log("fullPrice", fullPrice);
console.log("adaptive", !!adaptive);
console.log(screens.length);
console.log(
    "Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани"
);
console.log(
    "Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани"
);
//console.log(screens.toLowerCase().split(","));
console.log(
    "Процент отката посреднику за работу " +
    fullPrice * (rollback / 100) +
    " рублей"
);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);