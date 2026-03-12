function fiveLine(s){
  let result = [];

  for(let i = 1; i <= 5; i++) {
    result.push(`${s.trim().repeat(i)}`);
  }
  
  return result.join('\n');
}

console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));
console.log(fiveLine("           Ok               "));