var myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34 ]


//Opcion 1:
let mayor = Number.MIN_VALUE;
for (let i = 0; i < myArray.length; i++){
    if(myArray[i] > mayor){
        mayor = myArray[i]
    }
}
console.log(mayor)

//Opcion 2:
/* var max = Math.max(...myArray);
console.log(max) */