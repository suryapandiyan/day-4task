 
let primeNumbers = (function(arr) {
  let isPrime = function(num) {
  if(num <= 1) {
    return false;
  }
  for(let i=2; i<=Math.sqrt(num); i++) {
    if(num%i === 0) {
      return false;
    }
  }
  return true;
};
  let result = [];
  for(let i=0; i<arr.length; i++) {
    if(isPrime(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
})([1,2,3,4,5,6,7,8]);
console.log(primeNumbers);
