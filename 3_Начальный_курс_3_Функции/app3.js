function calculateYear(year){
    return 2020 - year
}

console.log(calculateYear(2001))

function infoAbout(name, year, info){
    let age = calculateYear(year)
    console.log(name, age)
    if (age >= 18){
        console.log(name + ' совершеннолетний умный')
    } else if (age <18 && age > 0) {
        console.log(name + ' несовершеннолетний дэбил')
        
    } else {
        console.log(name + ' неродившийся дэбил')
    }
    let showInfo = info
    console.log(info)
}

infoAbout('Ваня', 1992, 'он очень умный на самом деле')