function countStart(){
    let count = 0
    return function(){
        count++
        console.log(count)
        if (count % 10 == 0){
            console.log('Аче')
        }
    }
}
console.log('я хочу пиццу')
const click = countStart()
document.onclick = click
console.log('kjkjkj')
