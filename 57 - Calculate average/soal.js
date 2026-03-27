function findAverage(array) {
  if(array.length === 0) return 0;
  return array.reduce((a,b) => a + b,0) / array.length;
}

console.log([1,1,1]);
console.log([1,2,3]);
console.log([1,2,3,4]);