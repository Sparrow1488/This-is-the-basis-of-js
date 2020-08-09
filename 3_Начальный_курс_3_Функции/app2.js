console.log('Function 1')

const nowYear = 2020
const userYear = 2005

function calculateAge(year) {
    return 2020 - year
    }

// let age = calculateAge(userYear)
// console.log(calculateAge (2003))
// console.log(calculateAge (2005))
// console.log(calculateAge (2007))

function infoAbout(name, year){
    const age = calculateAge(userYear)
    console.log('Человек ' + name + ' с возрастом ' + age)
}

infoAbout('бабуин', 2001)






// let name1 = 'евон'
// let name2 = 'левон'

// function userInfo(age) {
//     console.log('Пользователю: ' + name1 + ' уже ' + age + ' лет!')
//     if (age>= 18){
//         console.log('Совершеннолетний')
//     } else {
//         console.log('Несовершеннолетний')
//     }
// }
// userInfo (age)






