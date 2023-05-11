(function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.push(arr.shift());
    }
    console.log(arr);
 }
   
)([1,2,3,4],2)
  