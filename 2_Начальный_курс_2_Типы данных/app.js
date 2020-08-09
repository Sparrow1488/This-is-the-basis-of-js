// 4 ТИПЫ ДАННЫХ

const prog = true
const name = 'Name'
const age = 27
let x
console.log('kjkjkj')

// 5 примитивных типов данных
console.log(typeof prog)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(typeof null)

// 5 ПРИОРИТЕТ ОПЕРАТОРОВ
const fullAge = 16
const birthDay = 2003
const currentYear = 2020

const inFullAge = (currentYear - birthDay) >= fullAge //17 >= 16 => true
console.log(inFullAge)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 6 УСЛОВНЫЕ ОПЕРАТОРЫ
const status = 'ready' //fail, ready

if (status === 'fail') {
    console.log('Status: fail')
} else if (status === 'ready'){
    console.log('Status: ready')
} else {
    console.log('Че-то другое')
}



const num1 = 42 //number
const num2 = '42' //string
console.log(num1 === num2) //ЛУЧШЕ В JS ПИСАТЬ 3: ===



const isReady = false

if (isReady) {
    console.log('Хотово')
} else {
    console.log('не хотово')
}

//ТЕРНАРНОЕ ВЫРАЖЕНИЕ
isReady ? console.log('Хотово') : console.log('не хотово')


// 7 БУЛЕВАЯ ЛОГИКА
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B
const expr1 = true // 1
const expr2 = false //0

console.log(expr1 && expr2) // 1 * 0 = 0
console.log(expr1 || expr2) // 1 + 0 = 1
console.log(!expr1) // отрицание true = false 
console.log(!!expr1) // отрицание отрицание true = true 
