let people = ["Job", "Dima", "mango"]
console.log(people.join(","));


const fruit = ['яблуко', 'банан', 'груша', 'апельсин', 'ківі']
let result = ""
for (let i = 0; i < fruit.length; i++) {
  result += fruit[i]; 

  if (i < fruit.length - 1) {
    result += ',';
  }
}
console.log(result);

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

cards.splice(2, 1)
console.log(cards);


cards.push("Карточка-6")


cards.splice(2,1 ,"Оновлена Карта")