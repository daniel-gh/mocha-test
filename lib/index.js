// average.js
// 取得陣列的平均值
function average(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

function max(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        max = array[i] > max ? array[i] : max
    }
    return max
}

function min(array) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        min = array[i] < min ? array[i] : min
    }
    return min
}

module.exports = {
    average,
    max,
    min
}