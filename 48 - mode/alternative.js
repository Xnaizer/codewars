function cariModus(arr) {
    let numbers = new Map();

    for(let i = 0; i < arr.length; i++) {
        if(numbers.has(arr[i])) {
            numbers.set(arr[i], numbers.get(arr[i]) + 1);
        } else {
            numbers.set(arr[i], 1);
        }
    }

    if(numbers.size === 1) return -1;

    let maxValue = 0;
    let mode = -1;

    for(let [key, value] of numbers) {
        if(value > maxValue) {
            maxValue = value;
            mode = key;
        }
    }

    return maxValue === 1 ? -1 : mode;



}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([10, 3, 10, 5, 1, 2, 5])); // 10 =  not 5 because by whos in first
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1