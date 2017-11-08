import React, { Component } from 'react'
import { Footer } from '../index'
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
    axios.post('/topics', {
      title,
      tab,
      content
    })
  }
  render () {
    console.log(this.state)
    return (
      <div className='rootBox'>
        <header className='new-header' flex='flex'>
          <h2>发表</h2><div className='submit' onClick={this.handleSubmit} />
        </header>
        <form className='new-topic' onChange={this.handleTitleChange} >
          <input autoFocus type='text' placeholder='标题' name='title' />
          <select className='new-topic-selece' name='tab'>
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

export default NewTopic
