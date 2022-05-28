// 數組遞迴求和
const arr = []
function sum(arr) {
  if(!Array.isArray(arr)) {
    console.log(`${arr} is not Array`);
    return
  }
  let target = 0 
  let i = 0
  addNext(arr[i])

  function addNext(num) {
    if(i >= arr.length) return
    target += num
    return addNext(arr[++i])
  }
  return target
}

console.log(sum(arr));