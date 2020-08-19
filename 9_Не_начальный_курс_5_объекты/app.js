// ОБЪЕКТЫ
const person = {
    name: 'Валентин',
    age: undefined,
    languages: ['ru', 'en'],
    isProgrammer: true,
    ['key_' + (1 + 4)]: 'return key 4',
    'complex key': 'complex value',
    // greet1: function() {
    //     console.log('greet1 описание')
    // },
    // greet2() {
    //     console.log('greet2 описание')
    // }
    info() {
        console.log('this: ', this)
        console.log('Информация про человека по имени: ' + this.name)
    }
}

console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
// person.greet1()
// person.greet2()

person.age += 4
person.languages.push('by')
person.isProgrammer = false

delete person['complex key'] //оператор удаляет объект

//деструктуризация
const {name, age: personAge = 4, languages} = person
//age заменили на новую переменную (см. выше)
//можно назначить значение по умолчанию, если underfiend (см. personAge)

console.log(name, personAge, languages)
// console.log(person)

console.log('1 СПОСОБ ПЕРЕБОРА')
//1 СПОСОБ ПЕРЕБОРА - не очень
//безопасный перебор объекта через условие (опасность в случайном захождение в property устранена)
for (key in person){
    if (person.hasOwnProperty(key)){  
        console.log('key:' + key, 'value:' + person[key])
    }
}

console.log('2 СПОСОБ ПЕРЕБОРА')
//2 СПОСОБ ПЕРЕБОРА - норм
const keys = Object.keys(person) //получим массив из ключей
keys.forEach((key) => {
    console.log('key:' + key, 'value:' + person[key])
})
console.log('2.1 СПОСОБ ПЕРЕБОРА')
// 2.1 СПОСОБ ПЕРЕБОРА
Object.keys(person).forEach(key => console.log('key:' + key, 'value:' + person[key]))

//Context
person['key_5'] = undefined
person.info()

const logger = {
    keys(obj) {
        console.log('Obj keys:', Object.keys(obj))
    },

    keysAndValues(obj) {
        console.log('Obj keys:', Object.keys(obj))
        const keys = Object.keys(obj)
        keys.forEach(key => {
            console.log('key:' + key, 'value:' + person[key])
        })
    }
}
logger.keys(person)
logger.keysAndValues(person)