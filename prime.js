let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

let primeArr = arr.filter(isPrime);

console.log(primeArr);
