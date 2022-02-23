var arr= [4,5,734,43,45,]

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}


for (var i = 0; i <= 10; i++){
    arr.push(getRandom(1, 100))
}

console.log(arr)