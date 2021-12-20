//Получить заголовок "Калькулятор верстки" через метод getElementsByTagName. (тэг h1, получить именно элемент, а не коллекцию)
const title = document.getElementsByTagName("h1")[0];
console.log(title);
//Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. (класс handler_btn)
const btns = document.getElementsByClassName("handler_btn");
console.log(btns);
for (let btn of btns) {
    console.log(btn);
}
//Получить кнопку "+" под выпадающим списком через метод querySelector. (класс screen-btn)
const pls = document.querySelector(".screen-btn");
console.log(pls);
//Получить все элементы с классом other-items в две разные переменные. В первую элементы у которых так же присутствует класс percent, во вторую элементы у которых так же присутствует класс number через метод querySelectorAll
const otherItemPercent = document.querySelectorAll(".other-items");
const otherItemNumber = document.querySelectorAll(".other-items");
console.log(otherItemPercent);
const otherItemPercentAdded = document.querySelectorAll(".percent");
const otherItemNumberAdded = document.querySelectorAll(".number");
console.log(otherItemPercentAdded);
console.log(otherItemNumberAdded);
//Получить input type=range через его родителя с классом rollback одним запросом через метод querySelector
let userRollback = document.querySelector(
    ".rollback > main-controls__range.input[type='range']"
);
let userInputs = document.querySelectorAll(".rollback");
console.dir(userInputs);
console.log(userRollback);
//Получить span с классом range-value через его родителя с классом rollback одним запросом через метод querySelector.
let spanRollback = document.querySelector(".rollback > range-value");
console.log(spanRollback);
//Получить все инпуты с классом total-input справа через метод getElementsByClassName. (класс total-input, получить именно элементы, а не коллекции)
const totalInput = document.getElementsByClassName('total-input');
console.log(totalInput.length);
console.log(totalInput[0]);
console.log(totalInput[1]);
console.log(totalInput[2]);
console.log(totalInput[3]);
console.log(totalInput[4]);
//Получить все блоки с классом screen в изменяемую переменную ( let ) через метод querySelectorAll (далее мы будем переопределять ее значение)
let screens = document.querySelectorAll('.screen');
console.log(screens);