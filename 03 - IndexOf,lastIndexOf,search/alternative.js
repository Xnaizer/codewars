function firstToLast(str,c) {
    return (str.search(c) < 0) ? -1 : str.lastIndexOf(c) - str.indexOf(c)
}

console.log(firstToLast("ababc","a"));
console.log(firstToLast("ababc","c"));
console.log(firstToLast("ababc","d"));