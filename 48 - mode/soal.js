function cariModus(arr) {
    let numbers = {};

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] in numbers) {
            numbers[arr[i]]++
        } else {
            numbers[arr[i]] = 1;
        }
    }

    let maxValue = 0;
    let mode = -1;

    if(Object.entries(numbers).length === 1) return -1;

    for(let [key, value] of Object.entries(numbers)) {
        if(value > maxValue) {
            maxValue = value;
            mode = Number(key);
        }
    }

    return maxValue === 1 ? -1 : mode;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([10, 3, 10, 5, 1, 2, 5])); // 5  // set automaticly sort the keys
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1