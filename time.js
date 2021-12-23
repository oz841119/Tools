/*
=========
時間格式化: 
參數 time: Number(秒數)
返回值: Object( 天數dd, 小時hh, 分鐘數mm, 秒數ss)
=========
*/
export function durationFormatter(time) {
  if(!time) return{ss: 0} // 若time為0則直接返回ss = 0
  let t = time
  const ss = t % 60; // 取得格式化秒數
  t = (t - ss) / 60 // 取得排除秒數後分鐘數
  if(t < 1) return {ss} // 若t小於1秒 直接返回ss
  const mm = t % 60 // 取得格式化分鐘數
  t = (t - mm) / 60 // 取得排除分鐘數後的小時數
  if(t < 1 ) return {mm, ss} // 若t小於1秒 則返回mm, ss
  const hh = t % 24 // 取得格式化小時數
  t = (t - hh) / 24 // 取得排除分鐘數後的天數
  if(t < 1) return {hh, mm, ss} // 若t小於1秒 則返回hh, mm, ss
  const dd = t //若 t >= 1 那麼剩餘的秒數則為天數
  return {dd, hh, mm ,ss}
}

/*
=========
計算剩餘時間(從當下時間至結束時間): 
參數 endTime: ISO8601日氣的String EX:'2021-12-08T17:36:00+08:00'
返回值: 剩餘時間的秒數
=========
*/
export function getRemainTime(endTimeString) {
  let nowTime = new Date()
  let endTime = new Date(endTimeString)
  let remainTime = Math.floor((endTime - nowTime) / 1000)
  return remainTime
}


