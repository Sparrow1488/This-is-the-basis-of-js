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

console.log(Number.NEGATIVE_INFINITY)

const numberStr1 = '42'
const numberFloat = '42.42'
console.log(numberStr1 + 2) //сложение строк
//4  способа преобразовать string в integer
console.log(Number.parseInt(numberStr1) + 2) //парсинг строки в int
console.log(parseInt(numberStr1) + 2) //парсинг строки в int
console.log(Number(numberStr1) + 2) //парсинг строки в int
console.log(+numberStr1 + 2) //парсинг строки в int

console.log(+numberFloat + 2) //парсинг строки в float

console.log(0.1 + 0.2) //выводится шиза
console.log((1 / 10) + (1 / 5)) //то же что и сверху
console.log((0.1 + 0.2).toFixed(4)) // вызываем метод у числа (в скобках кол-во символов -
//после запятой, которое необходимо сохранить)
//НО ВЫВОДИТСЯ ЧИСЛО КАК STRING, ПОЭТОМУ:
console.log(+((0.1 + 0.2).toFixed(4))) 


//BigInt
//его нельзя совмещать (напр. складывать) с другими типами
console.log('BigInt: ' + 10n) //добавка n после числа - bigint
console.log(typeof 10n)
// console.log(10n + 4) //error
console.log(10n + BigInt(4)) //4 перевожу в BigInt
console.log(parseInt(10n) + 4) //10 перевожу в Int


//Math
console.log((Math.PI).toFixed(2)) 

console.log(Math.sqrt(25)) //корень из 25
console.log(Math.pow(5, 2)) //5 в 2 степень, = 25
console.log(Math.abs(-55)) // модуль из числа
console.log(Math.max(5, 4, 22, 333)) // выдает максимальное число из перечисленных
console.log(Math.min(5, 4, 22, 333)) // выдает минимальное число из перечисленных
console.log(Math.floor(4.9)) // округляет в меньшую сторону (выведет 4)
console.log(Math.ceil(4.9)) // округляет в большую сторону (выведет 5)
console.log(Math.round(4.5)) // округляет в сторону целого числа (крч как принято в матеше)

//---------------------
// ЕСЛИ ЧТО-ТО НЕ ПОМНИШЬ, ТО ЗАХОДИ НА MDN!!!!!!!!!!!!!!!!!!!!!!!
//---------------------

// алгоритм создания random функции
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) // рандом от min до max включая их
}

console.log(getRandomInt(10, 55))