const person = {
    name: 'Valentin', 
    age: 54,
    greet: function() {
        console.log('Чмоха' + this.name)
    }
}
//примеч.: создание person = personProt, только personProt расписан
const personProt = new Object({
    name: 'Valentin', 
    age: 54,
    greet: function() {
        console.log('Чмоха' + this.name)
    }
})
//создаем родительский(главный) прототип 
//для класса Object (для всех объектов)
Object.prototype.sayHello = function() {
    alert('шо')
}

const lena = Object.create(personProt) //наследуем все эллементы объекту lena
                                       //от объекта personProt

lena.name = 'lena'
lena.age = 27
lena.greet = function() {
    console.log(this.name + ' love ' + personProt.name)
}

let str = new String('im string')

//ВЫВОД: КЛАСС OBJECT САМЫЙ ГЛАВНЫЙ КЛАСС => ВСЕ ОЪЕКТЫ (прим.: String)
//ИДУТ ОТ НЕГО => НАСЛЕДУЮТ _PROTO_ ГЛОБАЛЬНЫЕ ФУНКЦИИ ОТ НЕГО

//ТАК ЖЕ В JS ОБЪЕКТЫ - ВСЕ И ВЕЗДЕ, ДАЖЕ ОБЫЧНАЯ СТРОКА (см. 28)