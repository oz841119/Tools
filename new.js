function copyNew() {
  let newObject = {}

   // 移除arguments[0]並Like array to Array (return arguments[0])，也就是construtor將儲存構造函數
  let construtor = Array.prototype.shift.call(arguments);

  if(typeof construtor !== 'function') return 

  // 創建物件使之抽象指向構造函數
  newObject = Object.create(construtor.prototype) 

  // 調用構造函數，並將this指定為newObject
  let result = construtor.apply(newObject, arguments)
  // 判斷result是否有返回值且是否為object或是function
  let flag = result && (typeof result === "object" || typeof result === "function");
  
  // 弱result為false則返回新建物件，若有返回值(也就是構造函數有return一個object or function)，則返回result
  return flag ? result : newObject
}


console.log(copyNew(function(age) {
  this.age = age
},1,2));