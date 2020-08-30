// alert('Че, не открывается?')
// confirm('Ну как там с деньгами?')
// prompt('Как тебя зовут?')

//КЛАССЫ ЧЕРЕЗ .класс
//ID через #id
const heading = document.getElementById('bodyMainText')
const heading2 = document.getElementById('helloUser')
// const heading3 = document.getElementById('gg')
// const heading3 = document.querySelector('.anotherHello')
const heading3 = document.querySelector('h2')
const heading4 = document.querySelectorAll('h2')
let userName = 'User name'

const time = setTimeout(() => {
    // alert('Че, не открывается?')
    const bgBody = document.getElementById('bgColor')
    bgBody.style.backgroundColor = '#FFE29F'
    addStyle(heading)
}, 500)

const time1 = setTimeout(() => {
    heading2.textContent = userName + ', well cum!!!'
}, 600)

heading3.style.backgroundColor = 'red'
for (let i = 0; i <= heading4.length; i++){
    heading4[i].innerHTML = '22'
}

console.log(heading4)


function addStyle(node){
    node.textContent = 'Не Hello World!!'
    node.style.color = '#F68302'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.fontSize = '55px'
}






