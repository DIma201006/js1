
// Початковий код:

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems тут
function countItems(array, condition) {
    let count = 0
    for (const item of array) {
        if (condition(item)) {
            count += 1
        }
      

    }
    return count
}

// Умови для перевірки:========================
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));



// Завдання 2: Калькулятор з операціями 📚

// Створіть універсальний калькулятор, який може виконувати різні математичні операції залежно від переданої колбек-функції.



// Створіть стрілкову функцію calculate(a, b, operation)
// Функція повинна викликати operation(a, b) та повернути результат
// Створіть 4 стрілкові функції для операцій: add, subtract, multiply, divide
// У функції divide додайте перевірку на ділення на нуль
// Протестуйте всі операції
// Початковий код:

// Функція calculate тут
const calculate = function(a, b, operation)  {
return operation(a,b);
}
// Стрілкові функції для операцій тут
 const add = (a,b) => a + b;
  const subtract = (a,b) => a - b;
  const multiply = (a,b) => a * b;
  const divide = (a,b) => {
    if (b === 0) {
    return false
  } else {
    return a / b
  }

}
// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку


// Завдання 3: Генератор повідомлень 💬

// Створіть функцію, яка повторює певну дію задану кількість разів, використовуючи колбек-функцію для генерації повідомлень.



// Створіть функцію repeatMessage(times, messageCreator)
// Створіть цикл for від i = 0 до i < times
// На кожній ітерації викликайте messageCreator(i)
// Протестуйте з різними колбеками


function repeatMessage(times, messageCreator) {
  const results = [];
    for (let i = 0; i < times; i++) {
      results.push(messageCreator(i));
    }
    return results
}



console.log(repeatMessage(5, i => `Повідомлення`));

