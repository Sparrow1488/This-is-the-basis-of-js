//короче нужно из 100 чисел выявить числа, которые делятся на 3 без остатка
// и оканчиваются на 4

let cal = 0
for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i.toString(10).endsWith('4'))) {
        console.log(i + ' делится на 3 без остатка и кончается на 4')
        console.log(++cal)
        // console.log(typeof i)
    } else {
        console.log(i + ' не делится на 3 без остатка')
    }
}
let result = `Программа выявила: ${cal} совпадений с поставленным условием`
console.log(result)












//ТЕСТЫ

// let b = 10
// 10..toString(2)
// console.log(b, typeof b)
// console.log(typeof b)
let i = 54
console.log(i.toString(10).indexOf('4'))

for (let i = 1; i <= 100; i++) {
    if (i.toString(10).endsWith('4')) {
        console.log(i + ' имеет 4')
        // console.log(typeof i)
    } else {
        console.log(i + ' не имеет 4')
    }
}