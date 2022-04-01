
function deepClone(obj, weakMap = new WeakMap()) { 
  const isObj = obj => typeof obj === "object" && obj !== null
  if(!isObj(obj)) return obj // 都不是則直接return原值
  const target = Array.isArray(obj) ? [] : {} // 如果傳參是數組 則設置一個空數組 反之
  weakMap.set(obj, target) // {...} or [...] -> {...} or [...]
  // 將傳參的每一項key編為一個組數，並遍歷這個數組，接這判斷這個key的值為引用還是基本數據類型，前者則遞迴，後者直接賦直
  Reflect.ownKeys(obj).forEach((item) => {
    target[item] = isObj(obj[item]) ? deepClone(obj[item], weakMap) : obj[item]
  })
  return target; 
}


const obj = {a:1 , b: {d:4, e:9}, c:[1,2,3,4,{ax: 3, aw:9}]}
obj.d = obj.b
obj.b = obj.d
const dc = deepClone(obj)
dc.a = 100
console.log(obj);
console.log(dc);