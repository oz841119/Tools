// 給定一個N，在Fibonacci陣列中(由0開始)，找出第 N 個數為何 (類似Leetcode: 509)
// 題目的根本意思應是使 N 為長度，找出index為(length -1)的值，故陣列可出可不出。不過當時看到題目描述「找出第 N 個數」時，我的腦子瞬間不靈光。

/* 
  複製入leetcode會錯誤的原因來自於leetcode: F(0)不應該出現在本函數的數組中所導致，故可在跳出遞迴的條件中更改為 n+1 return為arr[n]，其解近似於DP解
  但這樣無法直接性的得到一個合理的Fibonacci陣列 及 n = 陣列長度
*/
function fibonacci(n) {
  const arr = []
  const INDEX = 2
  arr[0] = 0, arr[1] = 1
  
  add(INDEX)
  function add(index) {
    if(index >= n) return
    arr.push(arr[index-2] + arr[index-1])
    return add(++index)
  }
  console.log(`Fibonacci陣列: ${arr}`);
  return arr[n-1]
}

console.log(fibonacci(10));




// leetcode的題目給出了限定值
function leetcodeFibonacci(n) { // 直接遞迴 2^n 
  if(n == 0) return 0
  if(n == 1) return 1
  let num = leetcodeFibonacci(n-1) + leetcodeFibonacci(n-2)
  return num
}
