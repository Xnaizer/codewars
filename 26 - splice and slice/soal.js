function threeInOne(arr){

    let result = []

    for(let i = 0; i < arr.length; i+= 3) {
        result.push(arr.slice(i,i + 3).reduce((a,b) => a + b, 0))
    }

    return result;
}


console.log(threeInOne( [1,2,3] ));
console.log(threeInOne( [1,2,3,4,5,6] ));
console.log(threeInOne( [1,2,3,4,5,6,7,8,9] )); // [6,15,24]

var arr1=[1,3,5,2,4,6,7,7,7],copy=arr1.slice();
console.log(threeInOne(arr1)); // [9,12,21]
console.log(arr1 , copy);

