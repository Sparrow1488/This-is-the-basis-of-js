const cards = document.querySelectorAll('.content-card')
const sortBtns = document.querySelector('nav')

try {
    if(sortBtns == undefined){throw new Error('Мне похуй, nav нету')}
    sortBtns.addEventListener('click', e => {
        if(e.target.tagName != 'LI'){throw new Error('Нажал не туда')}
        let color = e.target.dataset['f']
        if(cards == undefined){throw new Error('Карточек нэма')}
        for (let item of cards){
            item.classList.remove('hide')
            let data = item.dataset['f']
            if(data != color && color != 'all'){
                item.classList.add('hide')
            }
        }
    })  
}
catch(err){
    console.log(err)
}