//Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

//You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

//For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

//pairwise([1, 3, 2, 4], 4) should return 1.


function pairwise(arr, arg) {
  let suma = 0
  let selected = []
  arr.map((item, idx)=>{
    let isUsed = false
    arr.map((itemChild,idxChild)=>{
      if(idxChild <= idx) return //to do not re-evaluate preovious combinations
      if(selected.includes(idx) || selected.includes(idxChild)) return; //to do not repeat the value of one of the combinations that worked out
      if(item + itemChild === arg){
        selected = [...selected, idx, idxChild ]
      }
    })
  })
  if(selected.length > 0){
    suma = selected.reduce((cur,acc)=>{
      return cur + acc
    },0)  
  } 
  return suma;
}

pairwise([1, 1, 1], 2);