// Завдання 1

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.


function logItems(array) {
    let message = [];
    for (let i = 0; i < array.length; i += 1) {
        message.push(`${i} - ${array[i]}`)

    }
    return message;
}
console.log (logItems(['Mango', 'Poly', 'Ajax']));


// Напиши скрипт підрахунку вартості гравіювання прикрас.
//  Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини)
// і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
// return message.split(" ").length*pricePerWord
// }

// console.log(calculateEngravingPrice("і ціну гравіювання одного слова і повертає ціну гравіювання всіх слів в рядку",100));


// апиши функцію findLongestWord(string), яка приймає параметром довільний рядок
//     (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
function findLongestWord(string) {
 const str = string.split(" ")
    let lonegsWort = str[0]
    
    for (const wort of str) {
        if (lonegsWort.length < wort.length) {
         lonegsWort = wort
        }
    }
    
 return lonegsWort
}
console.log(findLongestWord("в рядку будуть тільки слова і прогалини"))


// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.



// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...',
//  після чого повертає .


function formatString(string) {
let message = ""
   
    if (string.length <= 40) {
        message = string
    } else {
       message = string.slice(0,40) + "..."
    }
    
    
    return message
}
console.log(formatString("Якщо довжина рядка не перевищує укорочену версію"));




function formatStriing(string) {
    let message = string
       
    if (string.length > 40) {
        message = string.slice(0, 40) + "..."  
        }
      
        return message
    }
    console.log(formatString("Якщо довжина рядка не "));
    
    
    // Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale.
    //  Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false.
    //  Слова в рядку можуть бути в довільному регістрі.

const message = " Слова в рядку можуть Spam бути в довільному регістрі."
 console.log(message.includes("sale"));

function checkForSpam(message) {
    const smolLeters = message.toLowerCase()
    return smolLeters.includes("sale") || smolLeters.includes("spam");
    
}

console.log(checkForSpam(message));

 





// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
//  Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній,
//     необхідно порахувати суму всіх елементів масиву і записати її в змінну total.Використовуй цикл for або for...of.
//     Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
//  Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.





// let input;
// const numbers = [];



// while (true) {
//     input = prompt("ведіть число") 

//     if (input === null) {
//         break
//     } 
//     if (isNaN(input)) {
//         alert('Було введено не число, попробуйте ще раз')
//         continue
//     } 
//     input = Number(input) 
//     numbers.push(input)
// }

// if (numbers.length > 0) {
//     let total = 0;
//     for (const number of numbers) {
//          total += number
//     }
//     console.log(total);
    
// }
 
// Створіть функцію, яка рахує, скільки елементів масиву відповідають певній умові, використовуючи колбек-функцію для перевірки.



// Створіть функцію countItems(array, condition)
// Створіть змінну count = 0
// Пройдіться по масиву циклом for...of
// Для кожного елемента викличте condition(element)
// Якщо condition повертає true, збільште count на 1
// Поверніть кінцевий результат


// Початковий код:

// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems тут
// function countItems(array, condition) {
//     let count = 0
//     for (const item of array) {
//         if (condition(item)) {
//             count += 1
//         }
      

//     }
//     return count
// }

// Умови для перевірки:========================
// const isEven = num => num % 2 === 0;
// const isLarge = num => num > 10;
// const isShort = word => word.length <= 3;

// Тестування
// console.log('Парних чисел:', countItems(numbers, isEven));
// console.log('Чисел більше 10:', countItems(numbers, isLarge));
// console.log('Коротких слів:', countItems(words, isShort));