const sendBtn = document.querySelector('button');

const inpLog = document.querySelector('.inpLogin');
const inpPas = document.querySelector('#inpCreatePassword');
const inpCheckPas = document.querySelector('#inpCheckPassword');
const inpCheck = document.querySelector('#checkBoxInp');

//ОБРАБОТЧИК КНОПКИ SEND
sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //создаем необходимые переменные
    let textLog = inpLog.value;
    let textPass = inpPas.value.trim();
    let textCheckPas = inpCheckPas.value.trim();
    let newPassword;
    let hasUser = false;

    //основной алгоритм
    if(textPass == textCheckPas && textPass != '' && textCheckPas != '' && String(textPass).length > 4){
        alert('Пароли в Input совпали')
        // объект из данных ползователя
        const addNewUser = {login: textLog, pas: newPassword}
        addNewUser.login = textLog
        addNewUser.pas = textPass
        massLog.push(addNewUser)
        console.log(massLog)
        console.log('Login: ' + addNewUser.login, 'Password: ' + addNewUser.pas)
        window.location.assign('./main.html')
    } else {
        if(String(textPass).length < 4){
            alert('Короткий пароль, либо введен не верно')
        }
        
    }
})
