// 请求函数独立出来
import axios from 'axios'
/**
 * 
 * @param {Object} data
 * @param {Object} data.url - 请求的地址  
 * @param {Object} data.params - 请求附加的参数
 */
export function RequestFn (data) {
  return (
    axios.get(data.url, {
      params:{
        limit:10,
        mdrender:false,
        ...data.params
      }
    })
      .then(res => res)
  )
}
