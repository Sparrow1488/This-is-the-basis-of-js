const sendBtn = document.querySelector('button');

const inpLog = document.querySelector('#inpLogin');
const inpPas = document.querySelector('#inpPassword');
const inpCheck = document.querySelector('#checkBoxInp');
//БАЗА С ЛЮДЬМИ
const massLog = [
    {log: 'Sparrow', pas: '1111'},
    {log: 'Eva', pas: '1234'},
    {log: 'Paul', pas: '12345'}
]
//ФУНКЦИЯ, ОБРАБАТЫВАЮЩАЯ CHECKBOX
function checkBoxFunc(){
    if(inpCheck.checked == true){
        inpPas.type = 'text';
    }
    else{
        inpPas.type = 'password';
    }
}

checkBoxFunc();
//ОБРАБОТЧИК КНОПКИ SEND
sendBtn.addEventListener('click', (e) => {
    try{
    e.preventDefault();
    let textLog = inpLog.value;
    let textPass = inpPas.value;
    let hasUser = false;
    for (let item of massLog){
        if(item.log == textLog && item.pas == textPass){
            alert('Прошел!');
            hasUser = true;
        }
    }
    if(hasUser == false){
        alert('Шо');
    }
    } catch(err){
        console.log(err.massage)
    }
})