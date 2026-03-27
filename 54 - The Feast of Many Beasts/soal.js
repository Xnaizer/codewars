function feast(beast, dish) {
    let data1 = beast.split(' ').join('');
    let data2 = dish.split(' ').join('');

    if(data1[data1.length - 1] === data2[data2.length - 1] && data1[0] === data2[0]) {
        return true;
    }

    return false;
}

console.log(feast("great blue heron", "garlic naan"))
console.log(feast("chickadee", "chocolate cake"))
console.log(feast("brown bear", "bear claw")) // 