function angkaPalindrome(num) {
  if(num < 0) return false;

  let reverseNum = 0;
  let originalNum = num;

  while(num > 0) {
    let digit = num % 10;
    reverseNum = reverseNum * 10 + digit;
    num = Math.floor(num / 10)
  }

  return originalNum === reverseNum;
}

// TEST CASES
console.log(angkaPalindrome(8)); // true
console.log(angkaPalindrome(10)); // false
console.log(angkaPalindrome(117)); // false
console.log(angkaPalindrome(181)); // true
console.log(angkaPalindrome(1001)); // true
console.log(angkaPalindrome(3213)); // false