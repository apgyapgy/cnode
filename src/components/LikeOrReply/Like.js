import React, { Component } from 'react'
// 此组件由轱辘大佬亲自命名。精神艾特轱辘大佬
import { Message } from '../index'
import axios from 'axios'
class Like extends Component {
  constructor () {
    super()
    this.state = {
      sup: ''
    }
  }
  componentWillMount () {
    this.setState({
      sup:this.props.ups.length
    })
  }
  replyLike = () => {
    if (localStorage.token) {
      axios.post(`/reply/${this.props.id}/ups`, {
        accesstoken: localStorage.token
      })
        .then(res => {
          if (res.data.action === 'up') {
            this.setState((prevState) => {
              return {
                sup: prevState.sup + 1
              }
            })
          } else {
            this.setState((prevState) => {
              return {
                sup: prevState.sup - 1
              }
            })
          }
        })
    } else {
      Message.error('请先登录后继续执行操作')
      this.props.Router.push({
        pathname: '/login',
        state:{ from: this.props.location }
      })
    }
  }
  render () {
    return (
      <div className={this.props.className}>
        <span onClick={this.replyLike}>赞 {this.state.sup}</span>
        <span >回复</span>
      </div>
    )
  }
}

export default Like
