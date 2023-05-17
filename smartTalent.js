const filterSheeps = (sheeps) => {
    let finalSheeps;
    finalSheeps = sheeps.filter((sheep)=>{
      if (sheep.includes(",")) {
          sheep.toLowerCase()
          const color = sheep.split(',')[1]
          const name =  sheep.split(',')[0]
          if(color === "red" && name.includes("a") && name.includes("n")){
            return sheep
          }        
        }
    })
    finalSheeps.map((sheep)=>{
        console.log(sheep.split(',')[0])
    })
}


/* filterSheeps(["3", "Noah,blue", "Ki na ma,red"]) */

const santassleight = (jumpNumbers) => {
  const arrayNumbers = jumpNumbers.split(",")
  let lastValue = arrayNumbers[0]
  let firstDifference = arrayNumbers[0] > arrayNumbers[1] ? "down" : "up"
  let result =  false
  arrayNumbers.map((number, idx) => {
    if (idx > 1) {
      const upDown = number > lastValue ? "down" : "up";
      if (upDown === firstDifference) {
        result =  true
      }
    }
    lastValue = number  
  })
  console.log(result);
  return result
}

santassleight("1,2,3")