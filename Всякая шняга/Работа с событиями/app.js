const btn = document.querySelectorAll('button')
const div = document.querySelector('div')
const body = document.querySelector('body')
const arrColor = ['green', 'blue', 'black']

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', (e) => {
        if(i <= 1){
            console.log('шо')
        }
        else{
            console.log('каво')
        }
    e.preventDefault() //отменяет обновление страницы
    console.log(e.target)
    console.log(e.offsetX, e.offsetY)
    console.log(e.target.tagName) //возвращает объект, на который нажали
    console.log(e.path)
    console.log(e.screenX, e.screenY)
    })
}
// document.addEventListener('keydown', e => {
//     if(e.code == 'KeyA'){
//         alert('попа')
//     }
// })
document.addEventListener('keydown', e => {
    if(e.code == 'KeyA'){
        div.style.backgroundColor = 'red'
    }  
})
document.addEventListener('keydown', e => {
    if(e.code == 'KeyD'){
        div.style.backgroundColor = 'blue'
    }  
})
document.addEventListener('keyup', e => {
    div.style.backgroundColor = 'darkgrey'
})
document.addEventListener('keyup', e => {
    
})
setInterval(()=>{
    for (color of arrColor){
    setInterval(() => div.style.backgroundColor = color, 1000)
}
}, 1000)

