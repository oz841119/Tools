// 箭頭函式改為function寫法 改不改都是250
// 不過我覺得這箭頭函式沒有關係 this也都是指向window 
//   (箭頭函數的this指向父級作用域的this，嚴格來說箭頭函數不具有this，當使用this時，用的是作用域上的this)
//   (函數聲明取決於調用者 這裡為window調用)
console.log(window.sayHi);


var a = 10
var b = 5

function sayHi(a,b){
return (a=>{ return a *b })( a * b)
}
console.log( sayHi(a,b) )


// 就挺簡單，但我花了滿長的一段時間思考，主要我並沒有看到this的出現，改為函數聲明好像也沒意義
// 主要這段程式碼的閱讀性「於我而言」有點難閱讀，要理清一下我習慣的原貌，所以改成函數聲明在腦中codeing一段時間

// 不過對方可能想讓我回答箭頭函式的this邏輯問題
// 把答案回答出來後我忘記題目是把箭頭函數改成函數聲明 只回答了一個250 然後解釋一下傳參方面的作用域，在回答邏輯時完全沒有提到箭頭函數的this...


function sayHi2(a,b) {
  return (function(a) { 
    return a * b 
  })( a * b )
}

console.log(sayHi2(a,b))
