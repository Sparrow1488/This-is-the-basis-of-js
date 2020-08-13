// 1 ФУНКЦИИ
//Function Declaration
function greet(name) {
    console.log('Здарова, ' + name)
}
//Function Expression
const greet2 = function greetFunction(name) { 
    console.log('Здарова, ' + name)
} 
greet('борбосы')
greet2('бибисы')

//Func Dec отличается от Func Expr тем, что вторая задается через переменную или константу ыыыы
//еще к первой функции можно обратиться когда угодно. Хоть объявить ее до создания самой функции,
//в то время как к Expression нельзя так обратиться.

// console.log(typeof greet) //просмотр типа 
// console.dir(greet) //более детальный просмотр (через браузер)

// 2 АНОНИМНЫЕ ФУНКЦИИ
let counter = 0
const interval = setInterval(function(){
    if (counter === 5) {
        console.log('шутка')
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000) //интервал через который выполняется функция (function, time)

// 3 СТРЕЛОЧНЫЕ ФУНКЦИИ

//первый способ
const arrow = (name) => {
    console.log('Здарова, ' + name)
}
arrow('пес')

//второй способ (покороче)(если один параметр в функции)
const arrow2 = name => console.log("Здарова, " + name)
arrow2('псина')

const pow2 = num => console.log(num ** 2) //возводит число во вторую степень
pow2(5)

// 4 ПАРАМЕТРЫ ПО УМОЛЧАНИЮ

const ukrainaPower = (a, b = 0) => a + b //по умолчанию значение b = 0
console.log(ukrainaPower(10)) //не передал значение b, а по умолчанию оно 0
console.log(ukrainaPower(7))


function sumAll(...all) { //функция которая сжирает все значения и складывает их
    let result = 0
    for(let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2 ,3 ,4 ,5) //на выходе произошел массив
console.log(res)

// 5 ЗАМЫКАНИЕ

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Валек')
console.log(logWithLastName('Воробей'))