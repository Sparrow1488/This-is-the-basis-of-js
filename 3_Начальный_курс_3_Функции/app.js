// 8 ФУНКЦИИ

//создание функции, высчитывающей кол-во лет
const nowYear = 2020 //год сейчас
let inputYear = 2005 // типо юзер ввел год

function calculateAge (year) {
    return nowYear - year
}

const age = calculateAge(inputYear)
    console.log('Лет: ' + age)

console.log('===Другое решение===')

//ввод имени и года рождения
let nameUserOne = 'Иван' //типо ввели сами
const birthYearUserOne = 2005
let nameUserTwo = 'Лена' //типо ввели сами
const birthYearUserTwo = 2008

//происходит функция
function showInfo(name, year) {
    const age = calculateAge(year)
    if (age >= 0) {
        console.log('Человеку по имени ' + name + ' уже есть ' + age + ' лет')
        let ageUserOne
    } else {
        console.log('Введен неверный год')
    }
}

//ввод в функцию переменных и дальнейшие манипуляции с ними
showInfo(nameUserOne, birthYearUserOne)
if (age >= 18){
    console.log('User ' + nameUserOne + ' совершеннолетний')
} else {
    console.log('User ' + nameUserOne + ' несовершеннолетний')
}





//Введите описание школы:
let descriptionSchool = 'Ого! Описание!'



function schoolYear(yearSchool, info){
    let ageShool
    return nowYear - yearSchool == ageShool
    console.log('Школе уже ' + ageShool + ' лет!')
    console.log('Описание школы: ' + descriptionSchool)
}

let ageShool = schoolYear()
schoolYear(1917, descriptionSchool)





