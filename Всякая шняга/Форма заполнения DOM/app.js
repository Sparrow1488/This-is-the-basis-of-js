const sendBtn = document.querySelector('button')
const inp = document.querySelector('input')
const users = ['igor', 'valentin', 'alex', 'shiza']

try {
    if(sendBtn == undefined){throw new Error('Button is underfiend')}
    if(inp == undefined){throw new Error('Input is underfiend')}

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let text = inp.value
        let has = false
        if(text.length <= 3){
            alert('Small simbol! Min 3 simbol')
            throw new Error('Small simbol! Min 3 simbol')
            }
        for (let i = 0; i < users.length; i++){
            if(text.toLowerCase() == users[i]){has = true}
            }
        if(has == true) {
            alert('Есть пробитие!')
            } else {
            alert('Нет пробития!!!')
            }
    inp.value = ""
    })
} catch(err) {alert(err.message)}