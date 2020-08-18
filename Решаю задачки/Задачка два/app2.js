// ТИПО БАЗА ДАННЫХ

const arrMembers = ['Admin1']

function addMember(name = '') {
    let addMem = arrMembers.push(name)
    console.log('Добавлен новый пользователь: ' + name)
}

function showInfoMembers(){
    console.log(arrMembers)
}

function calculateMembers(cal = 0){
    cal = arrMembers.length
    console.log('Пользователей всего: ' + cal)
}

addMember('Степа')
addMember('Гена')
addMember('Арнольд')
addMember('Мужик')
showInfoMembers()
calculateMembers()