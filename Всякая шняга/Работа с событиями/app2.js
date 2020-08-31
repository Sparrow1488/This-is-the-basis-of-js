const sendBtn = document.querySelector('#btnWhoCan')
const inp = document.querySelector('input')
const body = document.querySelector('body')

sendBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let bgBody = inp.value
    body.style.backgroundColor = bgBody
})

