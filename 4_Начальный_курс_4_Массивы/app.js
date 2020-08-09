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

// ЗАДАЧА, НО НЕ ВКЛЮЧАЙ ОНА ДАЕТ БЕСКОНЕЧНЫЙ ЦИКЛ
// const arr = [1, 2 ,3]

// for (let i = 0; i = 6; i++) {
//     let b = 0
//     // (arr[b] + arr[b + 1])
//     console.log((arr[b] + arr[b + 1]))
// }
//------------------------------


//11 ОБЪЕКТЫ

const person = {
    firstName: 'Valentin',
    lastName: 'Sparrow',
    birthYear: 2003,
    agePerson: function calculateAge(year) {
        return 2020 - person.birthYear
    }, 
    hobby: ['sigaretes', 'vgames', 'programming'],
    aboutPerson: 'Типо описание',
    haveSex: false,
    greet: function() {
        console.log('Ого! ОПИСАНИЕ АХАХАХ. Чекай че могу')
        console.log(3 + this.agePerson())
    }
}
console.log('Имя человека: ' + person.firstName)
person.greet()
//мдээ, такая вот шиза
console.log(person['hobby'])
console.log(person.hobby[1])

