var arr= [4,5,734,43,45,]

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

var num1 = getRandom(1, 100)
var num2 = getRandom(1, 100)

arr.push(num1, num2)
console.log(arr)