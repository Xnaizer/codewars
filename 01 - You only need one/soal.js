function check(a, x) {
  let result = false;
  
  for(let i = 0; i < a.length; i++) {
      if(a[i] === x) result = true;
   }
  
  return result;
}

// other solutions

function checkData(a,x) {
    return a.includes(x);
}