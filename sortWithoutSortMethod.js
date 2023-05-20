function bubbleSort(array) {
  // Only change code below this line
  let tempArray = []
  array.map((item)=>{
    let greaterPos

    if(tempArray.length < 1){
      tempArray.push(item)
      return
    }

    if(tempArray.length === 1){
      if(item > tempArray[0]){
        tempArray.push(item)
      }
      if(item< tempArray[0]){
        tempArray.unshift(item)
      }
      return
    }

    tempArray.map((tempItem,idx)=>{
      if(item > tempItem){
        greaterPos = idx
      }
    })
    if(greaterPos === (tempArray.length - 1)){
      tempArray.push(item)
      return
    }
    
    let firstPart = tempArray.slice(0, (greaterPos + 1))
    let secondPart = tempArray.slice((greaterPos + 1))
    tempArray = [...firstPart, item, ...secondPart]
    return
  })

  return tempArray;
  // Only change code above this line
}

bubbleSort([7,1,3,2,8])