// АССИНХРОННОСТЬ

// const tOut = setTimeout(() => {
//     console.log('я')
//     console.log('хочу')
//     clearTimeout(tOut)
// }, 2000)

// const interval = setInterval(() => {
//     console.log('я')
//     console.log('хочу')
//     clearInterval(interval)
// }, 3000)

let cal = 0
const startInteraval = (callback, wait) => {
    let start = setInterval(callback, wait)
}
