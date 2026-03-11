function whatNumberIsIt(n){
  
  let result = 'Input number is '
  
  if(n === Number.MAX_VALUE) {
    result += "Number.MAX_VALUE"
  } else if (n === Number.MIN_VALUE) {
    result += "Number.MIN_VALUE"    
  } else if (n === Number.POSITIVE_INFINITY) {
    result += "Number.POSITIVE_INFINITY"
  } else if (n === Number.NEGATIVE_INFINITY) {
    result += "Number.NEGATIVE_INFINITY"
  } else if (isNaN(n)) {
    result += "Number.NaN"
  } else {
    result += String(n)
  }
  
  return result
}