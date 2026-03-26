function targetTerdekat(arr) {
  let positionX = [];
  let positionO = [];
  let closest = Infinity;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'x') positionX.push(i)
    if(arr[i] === 'o') positionO.push(i)
  }

  if(positionO.length === 0 || positionX.length === 0) return 0

  for(i in positionX) {
    for(j in positionO) {
        if(Math.abs(positionO[j] - positionX[i]) < closest) {
            closest = Math.abs(positionO[j] - positionX[i])
        }
    }
  }

  return closest;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1