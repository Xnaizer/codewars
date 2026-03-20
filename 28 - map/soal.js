// function isolateIt(arr){
 
//   let result = []

//   arr.slice().map((item) => {
//     if(item.length % 2 === 0) {
//         let arr = item.split('')
//         arr.splice(item.length / 2, 0, '|')
        
//         result.push(arr.join(''))
//     }
    
//     if(item.length % 2 === 1) {
//         result.push(item.replace(item[Math.floor((item.length - 1) / 2)], "|"))
//     }
//   })
  
//   return result;
// } // wrong because replace based on value, the same value will be replaced

function isolateIt(arr){
 
  let result = []

  arr.slice().map((item) => {

    if(item.length % 2 === 0) {
        result.push(item.slice(0, Math.floor(item.length / 2)) + '|' + item.slice(Math.floor(item.length / 2)))
    }
    
    if(item.length % 2 === 1) {
        result.push(item.slice(0, Math.floor(item.length / 2)) + '|' + item.slice(Math.floor(item.length / 2) + 1))
    }
  })
  
  return result;
}

console.log(isolateIt(["abcdefgh","ijk.mln", "vN.t6o"]));
// console.log(isolateIt(["abcde","ababa"]));
// console.log(isolateIt(["1234","56789"]));

