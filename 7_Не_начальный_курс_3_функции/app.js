//ФУНКЦИИ
//Function Declaration
function greet(name) {
    console.log('Здарова, ' + name)
}
//Function Expression
const greet2 = function(name) { 
    console.log('Здарова, ' + name)
} //это анонимная функция, тк нет имени у функции
greet('борбосы')
greet2('бибисы')

//Func Dec отличается от Func Expr тем, что вторая задается через переменную или константу ыыыы
//еще к первой функции можно обратиться когда угодно. Хоть объявить ее до создания самой функции,
//в то время как к Expression нельзя так обратиться.

console.log(typeof greet)
console.dir(greet)
