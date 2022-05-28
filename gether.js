// 兩個陣列求交集 差集 聯集 (leetcode 350/349 較低效)

/*
  集合去重的話整段程式碼較為簡單，故不做去重，
  也就是每個元素皆視為獨立的個體，不存在任何與重複有關的行為，如[1,1,2,3] / [0,9,1,1] 交集則為[1,1]，
  但可傳參指定去重 
*/
const arr1 = [1,1,3,5,'offer',2,9,5,'你好',4,'安安']
const arr2 = [1,1,1,2,3,4,'offer',1,1,1,'我不好',1,2,'安安',9,9,'offer',10,3,4]

/**
 * gether - 主要想不到取什麼名字。默認得到兩數組之交集，不去重。可傳參指定差集或聯集；可傳參指定去重。
 * @param {[]} array1 
 * @param {[]} array2 
 * @param {""} mode 默認為交集(I)，可傳差集(D)，聯集(U)
 * @param {Boolean} unique 去重，默認為false，可傳true
 * @returns Array。根據模式及去重與否返回相應的
 */

function gether(array1, array2, mode = 'I', unique = false) {
  if( // 判斷參數內容是否正確
    !((Array.isArray(array1) && Array.isArray(array2))
    && (mode === 'I' || mode === 'U' || mode === 'D')
    && (typeof unique === 'boolean'))
  ) {
    console.warn('gether(): 參數有誤');
    return
  }

  const map = new Map()
  let mapKey = 0
  let targetOfI = []
  array2.forEach(e => {
    map.set(mapKey, e)
    mapKey += 2 // mapKeyName無所謂，主要對整個流程來說，他必須是獨特的KeyName，便於交集中進行刪除。
  });

  array1.map((e) => {
    const mapKeys = map.keys()
    for(key of mapKeys) {
      if(map.get(key) === e) {
        targetOfI.push(e)
        map.delete(key)
        return
      }
    }
  })

  // --- return 結果區 ---
  if(unique === true) {
    if(mode === 'I') return Array.from(new Set(targetOfI))
    if(mode === 'D') return Array.from(new Set(Array.from(map.values())))
    if(mode === 'U') return Array.from(new Set([...array1, ...array2]))
  }

  if(mode === 'I') return targetOfI
  if(mode === 'D') return Array.from(map.values())
  if(mode === 'U') return [...array1, ...array2]
}

console.log(gether(arr1,arr2, 'U', true));
