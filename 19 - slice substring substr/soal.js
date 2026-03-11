function cutIt(arr){
  
  let minLength = Infinity;
  let result = [];
  
  for(idx in arr) {
    if(arr[idx].length < minLength) {
      minLength = arr[idx].length;
    }
  }
  
  for(idx in arr) {
    result.push(arr[idx].substr(0, minLength))
  }

  return result;
  
}


console.log(cutIt(["ab","cde","fgh"]));
console.log(cutIt(["abc","defgh","ijklmn"]));
console.log(cutIt(["codewars","javascript","java"]));