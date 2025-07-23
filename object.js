// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit",
//  який дозволяє додавати гроші на рахунок, та метод "withdraw",
//   який дозволяє знімати гроші з рахунку.
// Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму.
//  Після проведення операції виводити повідомлення про залишок на рахунку. 

// const bankAccount = {
//     ownerName: "Dima",
//     accountNumber: "4231",
//     balance: 3000,
//     deposit: function () {
//         const myDeposit = confirm(`Бажаєте поповнити рахунок?`);
//   if (myDeposit === true) {
//     const money = Number(prompt("Введіть суму для поповнення"));
//     if (!isNaN(money) && money > 0)  {
//         this.balance = this.balance + money; 
//         alert(`Ваш рахунок поповнено на ${money} грн. Ваш поточний баланс: ${this.balance} грн.`);
//     } else {alert(`Введенно некоректну суму`)};
//   }
//     },

//     withdraw: function () {
//         const myWithdraw = confirm(`Бажаєте зняти гроші?`);
//   if (myWithdraw === true) {
//     const cash = Number(prompt("Введіть суму, яку ви хочете зняти"));
//     if (!isNaN(cash) && cash > 0 && cash <= this.balance)  {
//         this.balance = this.balance - cash; 
//         alert(`Ви зняли ${cash} грн. Ваш поточний баланс: ${this.balance} грн.`);
//     } else if (cash > this.balance) {
//         alert("Не достатньо коштів на рахунку");
//     } else {alert(`Введенно некоректну суму`)};
        
//     }
// }
// }
// // console.log(bankAccount.deposit());
// console.log(bankAccount.withdraw());



// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed".
//  Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false",
//   якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt().
//    Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


// const weather = {
//     temperature: 0,
//     humidity: 80,
//     windSpeed: 8,
//   isCold: function () {
//    this.temperature = Number(prompt("Ведіть температуру"))
//    if (!isNaN(this.temperature) && this.temperature >= 0) {
//     alert("температура вижче або рівна 0 градусів Цельсія");
//     } else { alert("температура нижче 0 градусів Цельсія")}
//   }
// }

// console.log(weather.isCold());

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", 
// який буде перевіряти правильність введеного email та password. 

// const user = {
//     name: "Dima",
//     email:"12121@gmail.com",
//     password:"111111",
//     login: function () {
//         const inputEmail = prompt("Введіть ваш email");
//         const inputPassword = prompt("Введіть ваш пароль");
//         if (inputEmail === this.email && inputPassword === this.password) {
//             alert(`${this.name}, ви успішно увійшли в аккаунт`)
//         } else {alert(`Невірний email або пароль`)}
//     }
// }
// console.log(user.login());



// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод,
//  який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче.
//  Вивести значення властивостей в консоль. 

// const movie = {
//     title: "Mirage",
//     director: "Dima Mironenko",
//     year: 1991,
//     rating: 9,
//     checkRating: function () {
//     if (this.rating > 8) {
//         return true;
//     } else {return false}
//     }
// }

// console.log(`Назва фільму: "${movie.title}" `);
// console.log(`Режисер: "${movie.director}" `);
// console.log(`Рік: ${movie.year} `);
// console.log(`Рейтинг: ${movie.rating} `);
// console.log(`Рейтинг вище 8?: ${movie.checkRating()}`);

 


// const bankAccount = {
//     balance: 10000,
//     deposit(amount) {
//         this.balance +=amount 
//         return this.balance
//     },
//     spendMoney(amount) {
//         if (amount > this.balance) {
//             return"Недостатньо коштів"
//         } 
//         this.balance -= amount 
//         return this.balance
//     }
// }

// console.log(bankAccount.deposit(1000));
// console.log(bankAccount.spendMoney(5000));
// console.log(bankAccount.spendMoney(15000));
