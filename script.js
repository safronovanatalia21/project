const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    service1: "",
    service2: "",
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    logger: () => {
        console.log("Уровень логгирования: ИНФО");
    },
};

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

function start() {
    userInput();
    getFullPrice();
    getTitle();
    getAllServicePrices();
    appData.logger();
}
allServicePrices = getAllServicePrices();
start();