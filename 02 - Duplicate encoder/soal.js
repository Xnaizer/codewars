function duplicateEncode(word) {

    // let alpha = []

    // for(chars of word) {
    //     if(!(alpha.includes(chars))) alpha.push(chars)
    // }

    // console.log(alpha)

    // wrong iteration

    // let data = {};
    // let result = ""

    // for(char of word) {
    //     // console.log(`${char in data} === ${char}`)
    //     if(!(char in data)) {
    //         data[char] = 1
    //         result += "("
    //     } else {
    //         data[char]++
    //         result += ")"
    //     }
    // }
    // console.log(data)
    // console.log(result)
    
    // wrong iteration validation first aplha not right

    

    let result = '';

    for(let i = 0; i < word.length; i++) {
        let counter = 0;

        // if(word[i] === word[i].toUpperCase()) {
        //     return 'should ignore case'
        // }

        for(char of word) {
            console.log(`${word[i]} === ${char}`)
            if(word[i].toLowerCase() === char.toLowerCase()) counter++
        }

        console.log(" '")
        console.log(counter)
        if(counter === 1) result += "("
        if(counter > 1) result += ")"
        
    }

    console.log(result)

    return result

}

// duplicateEncode("din")
console.log(duplicateEncode("Success"))

// using of is returning the value
// using in is returning the index
