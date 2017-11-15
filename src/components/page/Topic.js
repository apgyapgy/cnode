import React, { Component } from 'react'
import marked from 'marked'
import axios from 'axios'
import { Loading, RequestFn, Replies, Reply, Message } from '../index'
import moment from 'moment'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
})
class Topic extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      data: '',
      Reply: false,
      ReplyContent:''
    }
  }
  async componentWillMount () {
    let data = await RequestFn({ url:`${this.props.location.pathname}/`, params: { mdrender: false } })
    this.setState({
      loading: false,
      data: data.data.data
    })
    if (localStorage.token) {
      this.setState({
        Reply: true
      })
    }
  }
  ReplyOnchenge = (e) => {
    this.setState({
      ReplyContent: e.target.value
    })
  }
  ReplySubmit = () => {
    console.log('用户提交评论')
    if (this.state.ReplyContent === '') {
      Message.error('请先输入评论')
      return
    }
    axios.post(`${this.props.location.pathname}/replies`, {
      accesstoken: localStorage.token,
      content: this.state.ReplyContent
    })
      .then(async (res) => {
        Message.info('评论回复成功')
        let data = await RequestFn({ url: `${this.props.location.pathname}`, params: { mdrender: false } })
        console.log(data)
        this.setState({
          data: data.data.data,
          ReplyContent: ''
        })
      })
  }
  render () {
    console.log(this.state.data)
    return (
      <div className='Abs-float Root'>
        <header className='Abs-float AppHeader AppBorder flex'>
          <div className='topic-header-arrows' onClick={() => this.props.history.goBack()} />
          <h2>主题</h2>
        </header>
        <div className='Abs-float topic-box'>
          {this.state.loading
            ? <Loading loading={this.state.loading} />
            : <div style={{ padding: 10 }}>
              <h2>{this.state.data.title}</h2>
              <div className='topic-content-author flex'>
                <div>
                  <span>由 {this.state.data.author.loginname} </span>
                  <span>发表于 {moment(`${this.state.data.create_at}`).fromNow()} </span>
                  <span>{this.state.data.visit_count}次观看</span>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: marked(this.state.data.content) }}
                className='markdown-body topic-content'
              />
              <h3 className='topic-comment-sum'>{this.state.data.reply_count} 回复</h3>
              <div className='topic-comment-box'>
                {this.state.data.replies.map((item, index) => {
                  let content = marked(item.content)
                  return (
                    <Replies
                      key={index} // key
                      content={content} // 编译好的html
                      data={item} // 所有数据
                      location={this.props.location} // 当前页面url信息
                      Router={this.props.history} // 路由方法
                    />
                  )
                })}
              </div>
            </div>
          }
          <Reply
            reply={this.state.Reply}
            style={{ margin: 10 }}
            placeholder='支持Markdown语法'
            value={this.state.ReplyContent}
            submit={this.ReplySubmit}
            onChange={this.ReplyOnchenge}
          />
        </div>
      </div>
    )
  }
}

export default Topic
