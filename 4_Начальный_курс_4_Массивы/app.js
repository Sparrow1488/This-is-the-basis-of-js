//9 МАССИВЫ
const cars = ['Вольво', 'Мазда', 'Форд'] //правильное
console.log(cars)
// const carsNew = new Array('Вольво', 'Мазда', 'Форд') //полное расписывание
// console.log(carsNew)
console.log(cars.length) // длинна массива
cars[0] = 'Феррари' //замена эллемента массива
console.log(cars)
cars[cars.length] = 'новая машына'
console.log(cars)

//10 ЦИКЛЫ

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

console.log('')
console.log('способ for of')
console.log('')

for (let car of cars) {
    console.log(car)
}