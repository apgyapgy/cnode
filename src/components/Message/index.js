import React from 'react'
import Notification from 'rc-notification'
// 此组件参考antdmessage 组件
let defaultDuration = 2
let messageInstance
let key = 1
let prefixCls = 'message'
let getContainer

function getMessageInstance () { // 生成Notification实例函数
  messageInstance = messageInstance || Notification.newInstance({ // 向messageInstance赋值，如果已被赋值则不生成实例
    prefixCls, // 全局通知容器类名
    transitionName: 'up', // 过度类名
    style: {}, // 容器的附加样式
    getContainer,
  })
  return messageInstance
}
/**
 * 
 * @param {String} content - 通知内容
 * @param {String} key - 标识符
 * @param {Boolean} closable - 是否显示关闭按钮
 * @param {Function} onClose - 关闭之后的回调函数
 * @param {Number} duration - 持续时间
 * @param {Object} style - 附加样式
 * 
 * /
 
 /* 
 *上面是全部参数下面是antd使用的参数
 * @param {String} content - 通知内容，也可以传入React组件
 * @param {Number} duration - 持续时间
 * @param {String} type - 通知样式
 * @param {Function} onClose - 关闭之后的回调函数
 */
function notice (content, duration = defaultDuration, type, onClose) {
  let instance = getMessageInstance() // 调用函数生成实例
  instance.notice({
    key,
    duration, // 通知时长
    style: {}, // 附加样式
    content: ( // 内容
      <div className={`${prefixCls}-box ${prefixCls}-${type}`}>
        <span className={`${prefixCls}-content`}>
          {content}
        </span>
      </div>
    ),
    onClose,
  })
  return (function () {
    let target = key++ // 这个操作是target = key 然后key的值会++
    return function () {
      instance.removeNotice(target) // 用
    }
  }())
}

export default {
  info: (content, duration, onClose) => {
    return notice(content, duration, 'info', onClose)
  },
  error: (content, duration, onClose) => {
    return notice(content, duration, 'error', onClose)
  },
  warning: (content, duration, onClose) => {
    return notice(content, duration, 'warning', onClose)
  }
}
