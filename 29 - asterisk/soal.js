
let input = 5

// output:
//*
//**
//***
//****
//*****

const stars = (input) => {

    for( let i = 1; i <= input; i++) {

        let star = "*"

        for(let j = 1; j < i; j++) {
            star += "*"
        }
        
        console.log(star)
    }
}

console.log(stars(input))