// 給定兩數字字串 若數字及位置一樣則為A 若數字一樣位置不一樣則為B 輸出?A?B (LeetCode 299)

function getHint(secret, guess) {
  let A = 0
  let B = 0
  
  const remaining1 = []
  const remaining2 = []

  for(i in secret) {
    if(secret[i] === guess[i]) {
      ++A
    } else {
      remaining1.push(secret[i])
      remaining2.push(guess[i])
    }
  }

  remaining1.forEach(el => {
    if(remaining2.indexOf(el) >= 0) {
      remaining2.splice(remaining2.indexOf(el),1)
      ++B
    }
  })

  return `${A}A${B}B`
}

console.log(getHint('2223','2322')  );

