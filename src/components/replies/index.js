// 拆分出评论列表，不拆分的话，实现起来很困难
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Like, Reply, Message } from '../index'
import axios from 'axios'
import moment from 'moment'
class Replies extends Component {
  constructor () {
    super()
    this.state = {
      sup: '',
      replyContent:'',
      reply: false
    }
  }
  componentWillMount () {
    this.setState({
      sup:this.props.data.ups.length
    })
  }
  LoginState = () => {
    if (localStorage.token) {
      return false
    } else {
      Message.error('请先登录后继续执行操作')
      this.props.Router.push({
        pathname: '/login',
        state:{ from: this.props.location }
      })
      return true
    }
  }
  TopicLike = () => {
    if (this.LoginState()) {
      console.log('本地没有token跳转至登陆页面')
      return
    }
    axios.post(`/reply/${this.props.data.id}/ups`, {
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
  }
  TopicReply = () => {
    if (this.LoginState()) {
      console.log('本地没有token跳转至登陆页面')
      return
    }
    this.setState(prevState => {
      return {
        reply:!prevState.reply
      }
    })
  }
  replyonChange = (e) => {
    this.setState({
      replyContent: e.target.value
    })
  }
  replySubmit = () => {
    axios.post(`/topic/${this.props.data.id}/replies`, {
      accesstoken: localStorage.token,
      content: this.state.replyContent,
      reply_id: this.props.data.id
    })
  }
  render () {
    console.log(this.state.replyContent)
    return (
      <div>
        <div className='topic-replies markdown-body'>
          <div flex='flex' className='topic-replies-item'>
            <img src={this.props.data.author.avatar_url} alt='avatar' />
            <div flex='flex'>
              <Link to={`/user/${this.props.data.author.loginname}`}>{this.props.data.author.loginname}</Link>
              <span>发布于:{moment(`${this.props.data.create_at}`).fromNow()}</span>
              <Like
                ups={this.state.sup}
                TopicLike={this.TopicLike}
                TopicReply={this.TopicReply}
              />
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
          <Reply
            reply={this.state.reply} // 是否显示
            defaultValue={`@${this.props.data.author.loginname} `} // 输入框默认显示内容
            onChange={this.replyonChange} // 受控输入框
            submit={this.replySubmit}
          />
        </div>
      </div>
    )
  }
}
export default Replies
