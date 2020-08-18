// НАПИСАЛ КОНСОЛЬКУ, КОТОРАЯ ИЩЕТ В МАССИВЕ ИМЯ ЧЕЛОВЕКА И ЕСЛИ НЕ НАХОДИТ, ТО ДОБАВЛЯЕТ ЕГО
// В БАЗУ
const people = [
    {name: 'Игорь', money: 2000, male: 'man'},
    {name: 'Юра', money: 1000, male: 'man'},
    {name: 'Женя', money: 5000, male: 'man'},
    {name: 'Кира', money: 6000, male: 'girl'},
    {name: 'Саня', money: 20000, male: 'girl'},
    {name: 'Саня', money: 25000, male: 'man'},
    {name: 'Вика', money: 2000, male: 'girl'}
]

let namePeople = 'Владелен'
let moneyPeople = 50000
let malePeople = 'man'
let index = people.findIndex(function(people){
        return people.name == namePeople
})

if (index === -1){
    people.push({name: namePeople, money: moneyPeople, male: malePeople})
    index = people.findIndex(function(people){
        return people.name == namePeople
}) 
} 

console.log(index)
console.log(people)