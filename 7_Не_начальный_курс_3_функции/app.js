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

const arrow = (name) => {
    console.log('Здарова, ' + name)
}

arrow('пес')
