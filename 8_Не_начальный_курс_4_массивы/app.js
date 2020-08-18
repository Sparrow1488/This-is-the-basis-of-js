const cars = ['Мазда', 'BMW']
const nums = [1, 1, 2, 3, 5, 8, 13]

cars.push('Волга')
cars.unshift('Лада')
console.log(cars)

const firstCar = cars.shift() //удаление первого эллемента массива
const lastCar = cars.pop() //удаление последнего эллемента массива
console.log(firstCar)
console.log(lastCar)
console.log(cars)

//Задача 1 - перевернуть строчку
const text = 'Hello World!'
//строку text превращаем через метод в массив, разбив ее на эллементы по каждому символу
//получили массив и перевернули его эллементы
//соединили без пробелов
let reverseText = text.split('').reverse().join('')
console.log(text)
console.log(reverseText)
//

const index = cars.indexOf('Мазда') //узнаем есть ли такой эллемент в массиве
cars[index] = 'Шевралю' //заменяем полученный выше индекс на новый
console.log(index)
console.log(cars)

console.log(cars.includes('Шевралю')) //ищет в массиве эллемент; возвращает boolean
console.log('===================')

const upperCaseCars = cars.map(car => { //map принимает в себя функцию и ВОЗВРАЩАЕТ ПРЕЖНИЙ МАССИВ
    return car.toUpperCase()
})
console.log(upperCaseCars)

const pow2Fun = num => num ** 2
const pow2Nums = nums.map(pow2Fun).map(Math.sqrt)
console.log(pow2Nums)
console.log(nums)

const filterNums = nums.filter(num => num < 10)  //filter принимает в себя функцию и ВОЗВРАЩАЕТ НОВЫЙ МАССИВ (поэтому объявляем его const/let)
console.log('Массив filterNums:')
console.log(filterNums)
console.log('Массив nums:')
console.log(nums)

