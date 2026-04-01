function drawStairs(n) {
  let result = [];

  for(let i = 1; i < n + 1; i++) {
    let temp = '';
    for(let j = 0; j < i - 1; j++) {
        temp += ' ';
    }
        temp += 'I';
        result.push(temp)
    } 
  return result.join('\n');
}

// console.log(drawStairs(2))
console.log(drawStairs(2))
// console.log(drawStairs(2))