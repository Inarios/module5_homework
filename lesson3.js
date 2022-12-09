//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let str1 = "Hello world";
let newstr = ""
for (let i = str1.length-1; i >= 0; i--) {
    newstr += str1[i]
}

console.log(newstr)
