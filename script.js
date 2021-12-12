let title;
let newTitle;
let screens;
let screenPrice;
let input;
let num;
let fullPrice;
let rollback = (5 * fullPrice) / 100;
let adaptive;
let service1;
let servicePrice1;
let service2;
let servicePrice2;
let allServicePrices;
let servicePercentPrice = Math.ceil(fullPrice - rollback);

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function userInput() {
    title = prompt("Как называется ваш проект", "Пункт выдачи заказов");
    screens = prompt(
        "Какие типы экранов нужно разработать?",
        "Для планшетов, для телефонов"
    );
    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));

    service1 = prompt("Нужны ли дополнительные услуги?");

    while (!isNumber(servicePrice1)) {
        servicePrice1 = prompt("Сколько это будет стоить?");
    }

    service2 = prompt("Нужны ли дополнительные услуги?");

    while (!isNumber(servicePrice2)) {
        servicePrice2 = prompt("Сколько это будет стоить?");
    }

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

function getAllServicePrices(servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
}

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

function getTitle(title) {
    return title.trim().charAt(0).toUpperCase();
}

function getRollbackMessage() {
    return rollback;
}

function getServicePercentPrices(fullPrice, rollback) {
    return fullPrice - rollback;
}

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

screenPrice = Number(getScreenPrice());
allServicePrices = Number(getFullPrice(servicePrice1, servicePrice2));
fullPrice = Number(getFullPrice(screenPrice, allServicePrices));
newTitle = getTitle(title).toString();
servicePercentPrice = Number(getServicePercentPrices(fullPrice, rollback));

console.log(isNumber(screenPrice));
console.log(isNumber(allServicePrices));
console.log(isNumber(fullPrice));
console.log(isNumber(title));
console.log(isNumber(servicePercentPrice));
console.log(screens.split(","));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(getRollbackMessage());
console.log(servicePercentPrice);