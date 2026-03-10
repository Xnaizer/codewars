function padIt(str,n){
    
    let result = `${str}`;
    let i = 0;

    do {
        i++
        if(i % 2 === 0) result = result + "*"
        if(i % 2 === 1) result = "*" + result 
    } while (i < n)

    return result
}

console.log(padIt("a",1));
console.log(padIt("a",2));
console.log(padIt("a",3));
console.log(padIt("a",4));
console.log(padIt("a",5));