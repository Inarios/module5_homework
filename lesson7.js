/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

let arr = [1, 1, 3, null, 'котик', false, 13, 0, NaN];
let other = 0;
let odd = 0;
let even = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        if (arr[i] === 0) {
        zero++;
        }
        else if (arr[i] % 2 === 0) {
        even++;
        }
        else odd++;
    } 
    else if (isNaN(arr[i])) {
        other++;
    }
    else other++;
}
console.log(`кол-во не чисел ${other}`)
console.log(`кол-во нечетных ${odd}`)
console.log(`кол-во четных ${even}`)
console.log(`кол-во нулевых значений ${zero}`)