function angkaPalindrome(num) {
  if(num < 10) return true;

  const numbers = String(num).split('');
  
  for(let i = 0; i < Math.floor(numbers.length / 2); i++) {
    if(numbers[i] !== numbers[numbers.length - 1 - i]) {
        return false;
    }
  }

  return true;
}

// TEST CASES
console.log(angkaPalindrome(8)); // true
console.log(angkaPalindrome(10)); // false
console.log(angkaPalindrome(117)); // false
console.log(angkaPalindrome(181)); // true
console.log(angkaPalindrome(1001)); // true
console.log(angkaPalindrome(3213)); // false