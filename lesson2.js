/*Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».*/

let x = 'wasd';
if (typeof x === "number") {
    console.log(x + ' - число')
}
else if (typeof x === "string") {
    console.log(x + ' - строка')
}
else if (typeof x === "boolean") {
    console.log(x + ' - логический тип')
}
else {
    console.log(x + ' - тип не определен')
}