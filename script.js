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
console.log(
    "Процент отката посреднику за работу " +
    fullPrice * (rollback / 100) +
    " рублей"
);

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
// Вывести в консоль длину строки screens
// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))

// typeof myVar
//bigint +n-только целочисленных
//операторы унарные(+/-5,++) и бинарные (+,-,*,/,%,** - возведение в степень)
//логические <,>, >=,<=, == (может быть использован для сравнения разных типов данных), !=, ===, !==(строго для сравнения данных одного типа)
//Math.floor округление в меньшую
//Math.ceil округление в большую
//Math.round округление до ближайшего
//Math.trunc удаление дробной части
//Math.random случайное числ от 0 до 1
//Math.max(3,5)
//Math.sqrt(25)
//Math.pow(5,2)

//str.length
//str.toUpperCase(), toLowercase()
//str.charAt(2),str[2]
//str.substring(6)
//str.substring(6,15)
//str.slice(-6)
//str.slice(-6)
//str.substr(0,2), где 2 - кол-во символов, кот нужно отрезать
//str.indexOf("my")
//str.includes("my")
//str.replace
//str.split(" ")