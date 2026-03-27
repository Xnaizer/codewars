function all(arr, fun) {
    // if(arr.length === 0) return true;
    // if(arr.length === 1) return fun(arr[0]);

    // for(let i = 0; i < arr.length ; i++) {
    //     if(fun(arr[i]) !== fun(arr[i + 1])) {
    //         return false;
    //     } else {
    //         return fun(arr[i]);
    //     }
    // } // wrong reading the questions

    for(let i = 0; i < arr.length; i++) {
        if(!(fun(arr[i]))) {
            return false;
        }
    }

    return true;

    // return arr.every(fun)
}

console.log(all([1, 2, 3, 4, 5], function(v) { return v < 9; }));
console.log(all([1, 2, 3, 4, 5], function(v) { return v > 9; }));
console.log(all([-14,-18,-52,95], function(v) { return v > 0; }));
console.log(all([71,-93,11], function(v) { return v % 2 !== 0; }));