const shuffleIt = (arr, ...arrays) => {

    const shuff = arrays;

    for(index in shuff) {
        let x = arr[shuff[index][0]];
        arr[shuff[index][0]] = arr[shuff[index][1]]
        arr[shuff[index][1]] = x;
    }

    return arr;
}

console.log(shuffleIt([1,2,3,4,5],[1,2]));
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]));
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]));