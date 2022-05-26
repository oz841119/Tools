/**
 * (method) debounce
 * @param {function} callBack - 要添加debounce的回調函數(必填)
 * @param {boolean} isImmediate - 默認為false，回調會在延遲時間後執行。若為ture，回調會立即執行，但時間內無法再次執行。
 * @param {number} delay - 默認為200ms，當isImmediate為false時為延遲時間，反之則為回調開放使用的間隔時間
 * @returns 具有debounce功能的函數，具有兩種模式。
 * 【isImmediate = false】回調延遲調用，若在延遲時間內重新調用則取消上一次將調用的回調。
 * 【isImmediate = false】回調立即執行，並在延遲時間內不會再被重新調用
 */
const debounce = function(callBack, isImmediate = false, delay = 200) {
  if(typeof callBack !== 'function') {
    return console.warn('Debounce() first argument is a callback function');
  }
  if(typeof isImmediate !== 'boolean') {
    return console.warn('Debounce() second argument is a boolean');
  }
  if(typeof delay !== 'number') {
    return console.warn('Debounce() third argument is a number');
  }
  let timer = false

  if(isImmediate) {
    return function(...args) {
      if(timer) {
        return
      }
      timer = true
      callBack.apply(this, args)
      setTimeout(() => {
        timer = false
      }, delay);
    }
  }

  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callBack.apply(this, args)
    }, delay)
  }
}

export default debounce