const people = [
    {Name: 'Vika', Money: 22000},
    {Name: 'Elena', Money: 2500},
    {Name: 'Sofia', Money: 1000}
]

let indexPeople = people.findIndex(function(people){
    return people.Money < 5000
})
console.log(people[indexPeople])
console.log('-----------')
let findPerson
for (const person of people){
    console.log(person)
    if (people.Money == 2500){
        findPerson = person
    }
}
console.log(findPerson)