/*Дан произвольный массив. 
Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/

let arr = [2, 5, 6, 1, 'котик']
let elements = arr.map(function(item) {
    return console.log(item)
}
)
console.log(`Длина массива ${arr.length}`)
