// 給定N，0~N中能整除3輸出Fizz，整除5輸出Buzz，兩者皆可輸出FizzBuzz，其他則正常輸出 (類似Leetcode 412)

function handleNum(number) {
  for(let i = 0 ; i <= number ; i++) {

    if((i % 3 === 0) && (i % 5 === 0)) {
      console.log('FizzBuzz') 
      continue
    }
  
    if(i % 3 === 0) {
      console.log("Fizz")
      continue
    }

    if(i % 5 === 0) {
      console.log('Buzz')
      continue
    }

    console.log(i);
  }
}

handleNum(55)