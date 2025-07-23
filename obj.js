let user = {
    name: "Bob",
    hobby: "football",
    premium: true
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user [key]}`);
}

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj) {
    return Object.keys(user).length
    // console.log(Object.keys(obj).length);
}

countProps(user)
console.log(countProps(user));








// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
//  Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".


let employees = {
    Ivan: 11, 
    Dima:110,
    Bogdan: 22,
    Anna: 2
}

function findBestEmployee(employees) {
    let bestResult = 0;
    let bestEmployee = "";

    for (let name in employees) {
        if (employees[name] > bestResult) {
            bestResult = employees[name];
            bestEmployee = name;      
        }
    }
    return bestEmployee;
}

console.log(findBestEmployee(employees));


const salaries = {
    Ivan: 1000,
    Dima: 2500,
    Bogdan: 1900,
    Anna: 1200
};

function countTotalSalary(salaries) {
    let total = 0;
     
    for (let name in salaries) {
        total += salaries[name];
    }      
    return total;
}

console.log(countTotalSalary(salaries));



// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
//  Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const players = [
    {name: "Dima", age: 22, salary: 1000},
    {name: "Ivan", age: 28, salary: 3000},
    {name: "Maks", age: 52, salary: 7000}
 ]


function getAllPropValues(arr, prop) {
    const parametrs = [];

    for (const obj of arr) {
        if (prop in obj) {
            parametrs.push(obj[prop]);
        }
    }

    return parametrs;
}


console.log(getAllPropValues(players, "name"));   
console.log(getAllPropValues(players, "salary")); 
console.log(getAllPropValues(players, "age"));




// Напиши функцію calculateTotalPrice(allProdcuts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

const product = [
    {name: "banan", price: 100, number: 3},
    {name: "appl", price: 10, number: 8},
    {name: "papir", price: 100, number: 20}
 ]



function calculateTotalPrice(allProducts, productName) {
    for (const item of allProducts) {
        if (item.name === productName) {
            return item.price * item.number;
        }
    }
    return 0; 
}


console.log(calculateTotalPrice(product, "banan")); 
console.log(calculateTotalPrice(product, "appl"));  
console.log(calculateTotalPrice(product, "papir"));
