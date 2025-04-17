// Home-Work 4


const email = "@DIMA";
const name = "Nazar";
if (email != null && name) {
 console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}


const str1 = 5;
const str2 = 5;
if (str1 + str2 < 10) {
    console.log("Сума менша або дорівнює 10");
}else {console.log("Сума більша або дорівнює 10");
}


 const str = "JavaScript";
 if (str != "JavaScript") {
     console.log("Текст не містить  слово JavaScript");
 }else {console.log("Текст містить слово JavaScript");
 }



const number = 10
if (number > 10 && number <20) {
    console.log("Число входить в діапазон від 10 до 20");
}else {console.log("Число не входить в діапазон від 10 до 20");
}





const name1 = "Ivan"
const email1 = "@ggggg."
const password = "123456"
if (
    name1.length >= 3 &&
    email1.includes("@") && email1.indexOf(".") &&
    password.length >= 6
) {console.log("Перенаправлення на іншу сторінку");
}else {console.log("Помилка: неправильне заповнення");
}


