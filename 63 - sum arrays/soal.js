function sum (numbers) {
    let result = 0;

    for(i in numbers) {
        result += numbers[i]
    }

    return result;
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));