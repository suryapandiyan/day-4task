//Convert all the strings to title caps in a string array
(function(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++) {
      let words = arr[i].split(" ");
      for(let j=0; j<words.length; j++) {
        let firstLetter = words[j].charAt(0).toUpperCase();
        let remainingLetters = words[j].slice(1);
        words[j] = firstLetter + remainingLetters;
      }
      let title = words.join(" ");
      result.push(title);
    }
    console.log(result);
  })(["hello","world","program"]);
   
  