function pasanganTerbesar(num) {
    let numbers = String(num).split('')
    let maxCouple = -Infinity;

    for(let i = 0; i < numbers.length - 1; i++) {
        let couple = `${numbers[i]}${numbers[i + 1]}`;
        if(Number(couple) > maxCouple) {
            maxCouple = Number(couple)
        }
    }

    return maxCouple;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99