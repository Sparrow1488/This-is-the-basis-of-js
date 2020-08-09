//ЧИСЛА
const num = 42 //integer
console.log(num)
const float = 42.42 //float
console.log(float)
const pow = 10e3 //10 в 3 степени
console.log(pow)
console.log()

console.log('MAX_SAFE_INTEGER: ' + Number.MAX_SAFE_INTEGER) //максимальное значение integer
console.log('Math.pow 53: ' + (Math.pow(2, 53) - 1)) //выводим это значение

console.log(Number.NaN) // Not a Number
console.log(typeof NaN)
const nanTest = 2 / undefined
console.log(isNaN(nanTest)) //true