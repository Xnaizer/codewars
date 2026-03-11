function splitAndMerge(string, separator) {
  let arrays = string.split(' ');
  let result = [];

  for(arr in arrays) {
    result.push(arrays[arr].split('').join(separator))
  }

  return result.join(' ')
}


console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("My name is John","-"));
console.log(splitAndMerge("Hello World!","."));
console.log(splitAndMerge("Hello World!",","));