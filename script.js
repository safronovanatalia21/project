let title;
let screens;
let screenPrice;
let input;
let num;
let fullPrice;
let rollback = 10;
let adaptive;
let service1;
let servicePrice1;
let service2;
let servicePrice2;
let allServicePrices;
let servicePercentPrice;

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
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
}
const getAllServicePrices = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let price = 0;

        if (i === 0) {
            service1 = prompt("Нужны ли дополнительные услуги?");
        } else if (i === 1) {
            service2 = prompt("Нужны ли дополнительные услуги?");
        }
        do {
            price = prompt("Сколько это будет стоить?");
        } while (!isNumber(price));

        sum += +price;
    }

    return sum;
};

const getFullPrice = function() {
    return +screenPrice + allServicePrices;
};

const getServicePercentPrices = function() {
    return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function() {
    return (
        title.trim().charAt(0).toUpperCase() + title.trim().substr(1).toLowerCase()
    );
};

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else if (price < 0) {
        return "Что-то пошло не так";
    }
};

userInput();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(servicePercentPrice);