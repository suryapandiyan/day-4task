(function getPalindromes(arr) {
    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      if (word === word.split('').reverse().join('')) {
        palindromes.push(word);
      }
    }
    console.log( palindromes);
  })(["hello","hi","deed","civic"])
  