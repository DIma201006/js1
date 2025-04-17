

let choice;
const drink = 2

switch (drink) {
    case 1:
       choice = "Кава"
        break;
 case 2:
        choice = "чай"
        break;
    
     case 3:
        choice = "сік"
        break;
    
    default:
        console.log("Такого напою нема");
}
console.log(choice);
 



let day;
const week = Number(prompt("Напишить день тижня"))
switch (week) {
    case 1:
        day = "повідомлення про робочий день,"
        break;
    case 2:
        day = "повідомлення про робочий день,"
        break;
    case 3:
        day = "повідомлення про робочий день,"
        break;
    case 4:
        day = "повідомлення про робочий день,"
        break;
    case 5:
        day = "повідомлення про робочий день,"
        break;
    case 6:
        day = "повідомлення про вихідний день,"
        break;
    case 7:
        day = "повідомлення про вихідний день,"
        break;

    default:
        console.log("Такого дня не існує");
        
}
console.log(day)
 


     
let month = 2;
let season;
if (month >= 3 && month <= 5) {
    season = "Весна";
} else if (month >= 6 && month <= 8) {
    season = "Літо";
} else if (month >= 9 && month <= 11) {
    season = "Осінь";
}
else if (month === 12 || month === 1 || month ===2 ) {
    season = "Зима";
} else {
    season = "невірни номер місяця"
};

console.log(season);


let color;
const movements = "червоний"

switch (movements) {
    case "червоний":
        color = "стоп"
        break;
    case "зелений":
        color = "йти"
        break;
    case "жовтий":
        color = "чекати"
        break;

    default:
       console.log("Такого кольору не існує");
}
console.log(color)







let num1 = 10;
let num2 = 0;
let operator = "/";
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2
} else if (operator === "*") {
    result = num1 * num2
}else if (operator === "/") {
    if (num2 === 0) {
        result = "помилка ділення на нуль";
    } else {
        result = "невідомий оператор"
    }
}

console.log(result)
