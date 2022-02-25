var myArray = [, 3344, 34334, 454543, 342534, 4563456, 3445, 23455,234, 262, 2335, 43323, 4356, 345, 4545, 452, 34, 5, 434, 36, 345, 4334, 5454, 345, 4352, 23, 365]
let divisor = 14;
myArray.forEach(function(item, index, arr){
    if (item % divisor == 0){
        console.log(item)
    }
})
