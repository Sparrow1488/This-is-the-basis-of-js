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
    //ключ: значение
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
//это одно и тоже (только в нижнем можно обратиться к конкретному эллементу (тк массив))
console.log(person['hobby'])
console.log(person.hobby[1])

//создаю переменную с названием строк в объекте и вызываю его как 
let key = 'hobby'
console.log(person[key])

//можно также поменять значение у ключа на любое другое
person.haveSex = !person.haveSex
console.log(person.haveSex)

//тут я получается добавил новый ключ в объект person
person.have18Years = function haveEighting(){
    if (this.agePerson >= 18) {
        console.log(this.firstName + ' совершеннолетний')
    } else {
        console.log(this.firstName + ' несовершеннолетний')
    }
}
//вызвал недавно созданный ключ из объекта
person.have18Years()