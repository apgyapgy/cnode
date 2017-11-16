import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Footer, Message } from '../index'
import axios from 'axios'
class NewTopic extends Component {
  constructor () {
    super()
    this.state = {
      title:'',
      tab:'',
      content:'',
    }
  }
  handleTitleChange = (event) => { // 通过事件冒泡捕获到改变的事件，触发setsta,teevent.target.name为触发事件的name 值就是触发事件的值（下拉事件为被选择项）
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  handleSubmit = () => {
    const { title, tab, content } = this.state
    if (title === '' && content === '') {
      Message.error('请填写标题或内容后重试')
      return
    }
    axios.post('/topics', {
      accesstoken: this.props.loginState,
      title,
      tab,
      content
    })
      .then(res => {
        this.props.history.push(`/topic/${res.data.topic_id}`)
      })
      .catch(err => {
        Message.error(`${err.response.data.error_msg}`)
      })
  }
  render () {
    console.log(this.props)
    return (
      <div className='Abs-float Root'>
        <header className='Abs-float AppHeader AppBorder flex'>
          <h2>发表</h2><div className='submit' onClick={this.handleSubmit} />
        </header>
        <form className='Abs-float new-topic' onChange={this.handleTitleChange} >
          <input autoFocus type='text' placeholder='标题' name='title' />
          <select className='new-topic-selece' name='tab'>
            <option value='' defaultValue >请选择分类</option>
            <option value='share' >分享</option>
            <option value='ask'>问答</option>
            <option value='job'>招聘</option>
            <option value='dev'>测试</option>
          </select>
          <div className='new-topic-textarea-box'>
            <textarea placeholder='支持Markdown语法，点击右上角箭头提交' name='content' />
          </div>
        </form>
        <Footer />
      </div>
    )
  }
}
function mapStateToProps (state) {
  console.log(state)
  return {
    loginState: state.LoginState.token
  }
}
export default connect(mapStateToProps)(NewTopic)
