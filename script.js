let title = prompt("Как называется ваш проект?");
let newTitle;
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice;
let input;
let num;
let fullPrice;
let rollback = (5 * fullPrice) / 100;
let adaptive = prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1;
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2;
let allServicePrices;
let servicePercentPrice = Math.ceil(fullPrice - rollback);

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function getScreenPrice(input) {
    do {
        input = +prompt("Сколько будет стоить данная работа?");
    } while (isNumber(input));
    return input;
}

function getAllServicePrices(servicePrice1, servicePrice2) {
    while (isNumber(servicePrice1)) {
        servicePrice1 = prompt("Сколько это будет стоить?");
    }
    while (isNumber(servicePrice2)) {
        servicePrice2 = prompt("Сколько это будет стоить?");
    }
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