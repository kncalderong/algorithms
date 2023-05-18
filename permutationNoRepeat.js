//Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

//For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

//Permutation function:
function permutation(array) {
    function p(array, temp) {
        var i, x;
        if (!array.length) {
            result.push(temp);
        }
        for (i = 0; i < array.length; i++) {
            x = array.splice(i, 1)[0];
            p(array, temp.concat(x));
            array.splice(i, 0, x);
        }
    }
    var result = [];
    p(array, []);
    return result;
}

//filter of arrays
function permAlone(str) {
  let filtered = permutation(str.split('')).filter((array)=>{
    let lastElement
    let hasRepeatedElements = false
    array.map((element)=>{
      if(element === lastElement){
        hasRepeatedElements = true
      }
      lastElement = element
    })
    if(!hasRepeatedElements){
      return array
    }
    return
  })
  return filtered.length;
}

permAlone('aab');