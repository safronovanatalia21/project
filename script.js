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
    allServicePrice: 0,
    userInput: function() {
        appData.title = prompt("Как называется ваш проект", "Пункт выдачи заказов");
        appData.screens = prompt(
            "Какие типы экранов нужно разработать?",
            "Для планшетов, для телефонов"
        );
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getServicePercentPrices: function() {
        return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    },
    getAllServicePrices: function() {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let price = 0;

            if (i === 0) {
                appData.service1 = prompt("Нужны ли дополнительные услуги?");
            } else if (i === 1) {
                appData.service2 = prompt("Нужны ли дополнительные услуги?");
            }
            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            sum += +price;
        }

        return sum;
    },
    getFullPrice: function() {
        return +appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function() {
        return (
            appData.title.trim().charAt(0).toUpperCase() +
            appData.title.trim().substr(1).toLowerCase()
        );
    },
    getRollbackMessage: function(price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что-то пошло не так";
        }
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    logger: () => {
        console.log("Уровень логгирования: ИНФО");
    },
    start: () => {
        appData.userInput();
        appData.isNumber();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getTitle();
        appData.getRollbackMessage();
        appData.logger();
    },
};

appData.start();