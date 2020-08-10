//короче нужно из 300 чисел выявить числа, которые делятся на 3 без остатка
// и оканчиваются на 4, а также нужно сложить снова полученные числа с предыдущими

console.log('Из какого диапозона необходимо вывести числа?')
let minNum = 0 //с какого числа начать отсчет
let maxNum = 300 // до какого числа выполнять условие?

let cal = 0 // счетчик чисел, которое выявила машина по условию
let sum = 0 //счетчик сумм предыдущего числа с последующим

console.log('Начался процесс...')
for (let i = minNum; i <= maxNum; i++) {
    if ((i % 3 == 0) && (i.toString(10).endsWith('4'))) {
        console.log(i + ' делится на 3 без остатка и кончается на 4')
        console.log('№ совпадения: ' + (++cal))
        console.log('Складываю предыдущее число с последующим: ' + sum + ' + ' + i + ' = ' + (sum += i))
        console.log('------')
    }
}
console.log('')
console.log('Операция окончена')
// let result = `Программа выявила: ${cal.toString(10).endsWith('1' || '2' || '3' || '4') ? cal + ' совпадения' : cal + ' совпадений' } с поставленным условием`
let result = `Программа выявила: ${cal.toString(10).endsWith('1') || cal.toString(10).endsWith('2') || cal.toString(10).endsWith('3') || cal.toString(10).endsWith('4') ? cal + ' совпадения' : cal + ' совпадений' } с поставленным условием`
console.log(result) //вывожу результат
console.log('Сумма = ' + sum) //вывожу сумму











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