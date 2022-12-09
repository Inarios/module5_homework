//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let map = new Map([
["1cat", "Boris"],
["2cat","Stepka"],
["3cat","Felix"]
])
for (let elem of map) {
    console.log(`Ключ - ${elem[0]}, Значение - ${elem[1]}`)
}