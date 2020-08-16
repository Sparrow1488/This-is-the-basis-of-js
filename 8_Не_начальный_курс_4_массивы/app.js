const cars = ['Мазда', 'BMW']

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

