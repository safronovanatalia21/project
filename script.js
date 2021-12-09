let title = prompt("Как называется ваш проект?");
let newTitle = "";
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let fullPrice = 0.0;
let rollback = (5 * fullPrice) / 100;
let adaptive = prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");
let servicePercentPrice = Math.ceil(fullPrice - rollback);

fullPrice = screenPrice + servicePrice1 + servicePrice2;
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

function getFullPrice(screenPrice, allServicePrices) {
    fullPrice = screenPrice + allServicePrices;
    return fullPrice;
}

function getTitle(title) {
    newTitle = title.trim().charAt(0).toUpperCase();
    return newTitle;
}

function getRollbackMessage() {
    return rollback;
}

const allServicePrices = function getAllServicePrices(
    servicePrice1,
    servicePrice2
) {
    return servicePrice1 + servicePrice2;
};
servicePercentPrice = function getServicePercentPrices(fullPrice, rollback) {
    return fullPrice - rollback;
};

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(getRollbackMessage());
console.log(servicePercentPrice);
console.log(screens.split(","));