//РАБОТАЕМ В КОНСОЛИ

function hello() {
    console.log('Hello world!', this)
}

const person = {
    name: 'Valentin',
    age: 26,
    sayHello: hello,                               //1
    sayHelloWindow: hello.bind(window),           //2
    sayHelloWindowThis: hello.bind(this),        //3
    sayHelloDocument: hello.bind(document),     
    logInfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    } 
}
//1
//this показывает объект, в коем контексте было вызвана функция
//т.е.: выводя person.hello() мы выводим функцию + сам объект, т.к. hello вызвано в контексте person
//if просто вызвать функцию, то this == window. (глобальному объекту)

//2
//f.bind(нужный объект) - данный метод меняет контекст функции на нужный контекст объекта, который указ. в скобках

//3
//this === window (по умолчанию)

const egor = {
    name: 'Egor',
    age: 23
}
const lena = {
    name: 'Elena',
    age: 26
}


//пишем в конце скобки, т.к. bind не возвращает функция, а создает новую, поэтому нужно ее вызвать ()
person.logInfo.bind(egor)('Prog', '992-886-19')

//или
const lenaInfoLog = person.logInfo.bind(lena)
lenaInfoLog('SisAd', '992-664-17')
//или
person.logInfo.bind(lena, 'SisAd', '992-664-17')()


//  <<---CALL МЕТОД--->>
person.logInfo.call(lena, 'SisAd', '992-664-17')
//то же, что и bind, только call сразу вызывает новую функцию 

//  <<---APPLY МЕТОД--->>
person.logInfo.apply(egor, ['SisAd', '992-664-17'])
//то же, что и bind и call, но вызывает функцию через массив (принимает только 2 параметра - kontext, array)


//=============

const array = [1, 2, 3, 4, 5, 6]

function multArr(arr, n) {
    return arr.map(function(i){
        return i * n
    })
}

console.log(multArr(array, 5))


//практика с протитипами
Array.prototype.multArr = function(n){
    return this.map(function(i){
        return i * n
    })
}

array.multArr(5)

//[2,3,4].multArr(10)   -  можно созд. нов. массив и сразу работать с ним  

//https://www.youtube.com/watch?v=UGapN-hrekw