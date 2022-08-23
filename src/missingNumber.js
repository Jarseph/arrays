/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
 const n = numbers.length + 1;
    for (let i = 1; i <= n; i++) {
      let found = false;
      let j = 0;
      while (found === false && j < numbers.length) {
        if (i === numbers[j]) {
          found = true;
        }
        j++
      }
      if (found === false) {
        return i;
      }
    }
  }

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
   const n = numbers.length + 1;
   const fullSum = (n * (n + 1)) / 2;
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
     sum = sum + numbers[i];
   }
  return fullSum - sum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
