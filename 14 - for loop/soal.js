function pickIt(arr){
  let odd = [], even = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) even.push(arr[i])
    if(arr[i] % 2 === 1) odd.push(arr[i])
  }
    
  return [odd,even];
}