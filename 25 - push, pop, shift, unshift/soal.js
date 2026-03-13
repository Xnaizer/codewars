// function infiniteLoop(arr,d,n){
  
//     if(d === 'right') {
//         for(index in arr) {
//             let x = arr[index].pop();
//             arr[(Number(index) + n) % arr.length].unshift(x)
//         }
//     }

//     if(d === 'left') {
//         for(index in arr) {
//             let x = arr[index].shift();
//             arr[(Number(index) + n + 1) % arr.length].push(x)
//         }
//     }

//     return arr;

// } // only for 1 condition

// function infiniteLoop(arr,d,n){
  
//     if(d === 'right') {
//         for(let index = 0; index < arr.length; index++) {
//             let x = []
//             for(let i = 0; i < n; i++) {
//                 x.push(arr[index].pop());
//             }
//             for(let i = 0; i < x.length; i++) {
//                 arr[(Number(index) + n - (n - 1)) % arr.length].unshift(x[i])
//             }
//         }
//     }

//     if(d === 'left') {
//         for(let index = 0; index < arr.length; index++){
//             let x = []
//             for(let i = 0; i < n; i++) {
//                 x.push(arr[index].shift());
//             }
//             for(let i = 0; i < x.length; i++) {
//                 arr[(Number(index) + (n * 2) + (n - 1)) % arr.length].push(x[i])
//             }
//         }
//     }

//     return arr;

// } // only for 3 condition, wrong validation

function infiniteLoop(arr,d,n){
  
    for(let index = 0; index < n; index++) {
        
        let x = []
     
        if(d === 'right') {
            for(let i = 0; i < arr.length; i++) {
                x.push(arr[i].pop());
            }
            console.log(x)
            for(let i = 0; i < arr.length; i++) {
                arr[(Number(i) + n - (n - 1)) % arr.length].unshift(x[i])
            }
        }

        if(d === "left") {
            for(let i = 0; i < arr.length; i++) {
                x.push(arr[i].shift())
            }
            for(let i = 0; i < arr.length; i++) {
                arr[(Number(i)  + (n * 2) + (n - 1)) % arr.length].push(x[i])
            }
        }
    }

    return arr

}

console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"left",3)); // [[2,3,4],[5,6,7],[8,9,1]]
// console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"right",4)); // [ [ 8, 9, 1 ], [ 2, 3, 4 ], [ 5, 6, 7 ] ]
// console.log(infiniteLoop([[1,2],[3,4,5,6],[7,8,9,10]],"right",1)); // [[3,4],[5,6,7,8],[9,10,1,2]]