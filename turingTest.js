let array = [1, 2, 3]

let result = array.reduce((acc, cur) => {
  return acc + cur
}, 0)

console.log(result)

let newObj = {}

array.map((item) => {
  newObj[item]  = item
})

console.log(newObj)