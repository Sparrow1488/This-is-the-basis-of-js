const btnDick = document.querySelector('button')
const listBtn = document.querySelector('#btn111')
const outBlock = document.querySelector('.out')
const arrEventList = []
let count = 0;

// try{
//     btnDick.addEventListener('click', function(e){
//         this.innerHTML = 'ХУЙ'
//         this.style.color = 'red'
//     }) 
// }
// catch(err){
//     console.log(err.message)
// }

// document.addEventListener('mousemove', e => {
//     const imgMain = document.querySelector('img')
//     let x = e.offsetX
//     let y = e.offsetY
//     console.log(x, y)
//     imgMain.style.top = y + 'px'
//     imgMain.style.left = x + 'px'
// })


btnDick.addEventListener('click', function(){
    const zaebalo = createList()
    zaebalo()
    delList()
})
const createList = () => {
    let div = document.createElement('div') //по клику создаем div
    let h1 = document.createElement('h1') //по клику создаем h1
    let delListBtn = document.createElement('button')
    return function(){
        count++
        if (count == 10){
            btnDick.disabled = true
        }
        h1.innerHTML = `<h1>Title ${count}</h1>` //называем h1
        delListBtn.innerHTML = 'Удоли'
        delListBtn.classList.toggle('deleteButtonDiv')
        div.classList.add('active') //применяю класс css к нашему div

        div.appendChild(h1)  //вкладываем в div наш h1
        div.appendChild(delListBtn)
        outBlock.appendChild(div) //вкладываем в блок out наш div с h1
        arrEventList.push(div)
        console.log(arrEventList)
    }
}

//метод удаления
const delList = () => {
    const delBtn = document.querySelector('.deleteButtonDiv')
    try{
        for(let i = 0; i <= arrEventList.length; i++){
            delBtn.addEventListener('click', function(e){
                count--
                let card = e.path[1]
                card.remove()
            })
        }
    } catch(err) {
        console.log()
    }
}
