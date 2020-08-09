//1 ПЕРЕМЕННЫЕ 

//хуита для плохих мальчиков
var var1 = 'Гондошка' //можно изменять переменную STRING

//очень хорошие парни
const varconchst = 'Капитошка' //нельзя изменять переменную BOOLEAN, писать неизменяемые значения
let avtorylet = 10 //переменная цыферок NUMBER и слоф SUPER PUPER KRUTAYA переменная

//camelCase - первое слово с маленькой буквы, второе с большой
const firstFisting = 9

console.log(var1, 'доп хуитаааааааааааааа')


//КАК МОЖНО ЗАДАВАТЬ ПЕРЕМЕННЫЕ И КАК НЕЛЬЗЯ
const withNum = 5 //МОЖНО
//const 5withNum = 5 //err

// 2 МУТИРОВАНИЕ
//конкатинация - соединение строк
const nameOne = 'ИмяАден'
let age = 27
console.log('Имя человека: ' + nameOne)
console.log(age)

const nameUser = prompt('Шо: ')
console.log('User - ' + '"' + nameUser + '"' + ' ' + 'вошел на сайт, AVE!')

// 3 ОПЕРАТОРЫ 
let nowYear = 2020
const birthYear = 2003
let a = 10
let b = 5

const ageOne = nowYear - birthYear
console.log(age)

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

//ИНКРИМЕНТИРОВАНИЕ
console.log(nowYear++) //выводит и после прибавляет
console.log(nowYear)

console.log(++nowYear) //прибавляет и выводит
console.log(nowYear)
//то же самое и с --

//равносильные действия
let c = 10
c = c + a
console.log(c)
c += a
console.log(c)
//----