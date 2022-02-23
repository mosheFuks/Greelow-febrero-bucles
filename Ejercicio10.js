var arr = [45, 67, 87, 23, 5, 32, 60]
var newArr = []

while (arr.length > 0){
    let ultElemento = arr.pop(arr[arr.length-1])
    newArr.push(ultElemento)
}

console.log(newArr)
