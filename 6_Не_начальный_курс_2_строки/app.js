let name = "Валек"
const age = 16


// let showInfo = 'Привет, я ' + name + ' и мне ' + age + ' лет'  
//немного некорректно
// console.log(showInfo)

//немного корректнее
let showInfoOk = `Привет, я ${name} и мне ${age} лет`
//также можно использовать в {} тернарные выражения (логику)
let showInfoOkLogic = `Привет, я ${name} и мне ${age < 20 ? 'меньше 18' : 'больше 18'}`
console.log(showInfoOk)
console.log(showInfoOkLogic)

let putOutHTML = `
    <div>блокблокблок</div>
    <p>text text text</p>
`
console.log(putOutHTML)


//МЕТОДЫ СТРОК

let textA = 'ThIs iS text'
console.log(textA)
console.log(textA.length)
console.log(textA.toUpperCase())
console.log(textA.toLowerCase())
console.log(textA.charAt(0)) //какой символ находится на месте в скобках
console.log(textA.indexOf('text')) //проверяет есть ли в переменной следующие символы:
//если ответ после indexOf = -1, значит нет совпадений
console.log(textA.startsWith('t')) //начинается ли строка с символа:
console.log(textA.toLowerCase().startsWith('t')) //можно также совмешать
console.log(textA.repeat(5)) //повторить тест столько то раз:
//немного балуюсь -------
if (textA.length < 13) {
    console.log('textA имеет меньше 13 символов!')
} else {
    console.log('Проходите, маэстро')
}
//-----------------------

const password = '          pa ss word '
console.log(password) 
console.log(password.trim()) //убирает ВСЕ пробелы
console.log(password.trimLeft()) //убирает ВСЕ слева
console.log(password.trimRight()) //убирает ВСЕ справа
