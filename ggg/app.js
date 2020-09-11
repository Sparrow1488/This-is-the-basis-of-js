const btn = document.querySelector('#btn1');
const inp = document.querySelector('#enter');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let textInp = inp.value;
    console.log(textInp)
})
