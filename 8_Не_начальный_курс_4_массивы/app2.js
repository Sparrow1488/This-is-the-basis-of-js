const people = [
{name: 'Vika', money: 22000},
{name: 'Elena', money: 2500},
{name: 'Sofia', money: 1000},
{name: 'Alice', money: 6000},
{name: 'Kira', money: 7500}
]
    
// 4 СПОСОБА НАХОЖДЕНИЯ ПО КЛЮЧУ

let indexPeople = people.findIndex(function(people){
return people.money < 5000
})
    
console.log(people[indexPeople])
console.log('-----------')
    
let findPerson = null
for (const person of people){
    if (person.money == 1000){
    findPerson = person
}
}
console.log(findPerson)
console.log('-----------')

let person1 = people.find(function(people){
    return people.money === 6000
})
console.log(person1)
console.log('-----------')

let person2 = people.find(people => people.money === 7500)
console.log(person2)

//reduce принимает в себя функцию, перебирая весь массив и Аккумулирует все эллементы, начиная с 
//определенного индекса (после запятой)
const allMoney = people
.filter(person => person.money > 1000) //всех людей, кроме людей меньше 1000
.reduce((acc, person) => { 
    acc += person.money
    return acc
}, 0)
console.log(allMoney)