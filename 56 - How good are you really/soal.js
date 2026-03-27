function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((a,b) => a + b, 0);
  const average = sum / classPoints.length;

  return yourPoints > average ? true : false;
}


console.log(betterThanAverage([50, 50, 50], 50)); // , false
console.log(betterThanAverage([2, 3], 5)); // , true
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)); // , false
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); // false
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); // , false
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true