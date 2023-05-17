function sym() {
  let args = Array.from(arguments);
    const answer = args.reduce((acc,cur)=>{
      const tempArray = []
      acc.map((item)=>{
        if(!cur.includes(item)){
          tempArray.push(item)
        }
      })
      cur.map((item)=>{
        if(!acc.includes(item)){
          tempArray.push(item)
        }
      })      
      return tempArray
    },[])
    const uniqueAns = [...new Set(answer)]
    return uniqueAns
}

sym([1, 2, 3, 3], [5, 2, 1, 4]);