import ReactDOM from 'react-dom'
import React, { Component } from 'react'
const div = document.createElement('div') // 创建一个div元素

class Container extends Component {

  constructor () {
    super()
    this.state = {
      dismissed: false
    }
  }
  componentDidMount () {
    document.body.appendChild(div) // 在body中添加创建的元素
    this.startCloseTimer()
  }
  componentWillUnmount () {
    document.body.removeChild(div) // 组件销毁前删除div
  }
  startCloseTimer  = () => {
    this.setState({
      dismissed: true
    })
    this.Timer = setTimeout(() => {
      // 定时器执行代码
    }, this.props.duration * 1000)
  }
  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }
  render () {
    return (
      <div>
        122
      </div>
    )
  }
}
Container.defaultProps = { // 定义默认props
  duration: 2
}
export default Container
