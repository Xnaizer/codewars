function howManySmaller(arr,n){

    // const arrays = [
    //     arr[0].toFixed(2), 
    //     arr[1].toExponential(2),
    //     arr[2].toPrecision(3)
    // ]

    // console.log(arrays)
  
    let result = 0;

    for(nums of arr) {
        const num = nums.toFixed(2)

        if(n > num) result += 1;
    }

    return result
}



console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));