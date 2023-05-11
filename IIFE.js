//Print odd number using IIFE
 (function(arr) {
  let result = [];
  for(let i=0; i<arr.length; i++) {
    if(arr[i]%2 !== 0) 
    {
      result.push(arr[i]);
    }
  }
  console.log(result);  
})([1,2,3,4,5])


