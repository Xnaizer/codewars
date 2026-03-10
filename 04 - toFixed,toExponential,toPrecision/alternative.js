function howManySmaller(arr,n){
    const arrays = arr.map((num) => num.toFixed(2))

    let result = 0;

    for(num of arrays) {
        if(n > num )  result++
    }

    return result;
}



console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));