//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return an array with a length of 6.
//pdateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

function updateInventory(arr1, arr2) {
    let resultArray = arr1.map((item1)=>{
        let itemToReturn = item1
        arr2.map((item2)=>{
            if(item1[1]=== item2[1]){
                itemToReturn = [(item1[0]+item2[0]),item1[1]] //sum of the elements with same name
            }
        })
        return itemToReturn
    })

    arr2.map((item2)=>{
        let isIncluded = false
        resultArray.map((itemResult)=>{
            if(itemResult[1]=== item2[1]){
                isIncluded = true //check if some element of second array is missing in the inventory, if not, include it
            }
        })
        if(!isIncluded){
            resultArray.push(item2)
        }
    })
    
    const uniqueResultArray = [...new Set(resultArray)].sort((a,b)=>{
        const nameA = a[1]
        const nameB = b[1] //sort by name, this is required because it is a 2d Array
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    return uniqueResultArray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);