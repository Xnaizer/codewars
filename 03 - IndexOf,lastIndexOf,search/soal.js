function firstToLast(str,c){
  if(str.search(c) === -1) return -1
  const inOf = str.indexOf(c)
  const lastOf = str.lastIndexOf(c)

  return lastOf - inOf;
}

console.log(firstToLast("ababc","a"));
console.log(firstToLast("ababc","c"));
console.log(firstToLast("ababc","d"));