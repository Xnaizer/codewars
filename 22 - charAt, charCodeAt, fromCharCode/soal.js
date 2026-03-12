function topSecret(str){
    let result = '';

    for(let i = 0; i < str.length; i++) {

        let code = str[i].charCodeAt();

        if(code >= 97 && code <= 122) {
            let decode = (code - 3 - 97 + 26) % 26 + 97;
            result += String.fromCharCode(decode);
        } else if (code >= 65 && code <= 90) {
            let decode = (code - 3 - 65 + 26) % 26 + 65;
            result += String.fromCharCode(decode);
        } else {
            result += str[i];
        }
    }

    return result;
  
}



console.log(topSecret("Pb qdph lv Mrkq")); //"My name is John"
console.log(topSecret("wklv lv dq hadpsoh")); // "this is an example"
console.log(topSecret("Khoor Zruog!")); // "Hello World!"