import React, { Component } from 'react'
import marked from 'marked'
import { Loading, RequestFn, Replies } from '../index'
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
      Reply: false
    }
  }
  async componentWillMount () {
    let data = await RequestFn({ url:`/topic/${this.props.match.params.id}`, params: { mdrender: false } })
    this.setState({
      loading: false,
      data: data.data.data
    })
  }
  onChangeReply = (state) => {
    this.setState({
      Reply: state
    })
  }
  render () {
    console.log(this.state)
    return (
      <div className='rootBox'>
        <header className='topic-header' flex='flex'>
          <div className='topic-header-arrows' onClick={() => this.props.history.goBack()} />
          <h2>主题</h2>
        </header>
        <div className='topic-content'>
          {this.state.loading
            ? <Loading loading={this.state.loading} />
            : <div>
              <h2>{this.state.data.title}</h2>
              <div flex='flex' className='topic-content-author'>
                <img src={this.state.data.author.avatar_url} alt='author' />
                <div>
                  <span>{this.state.data.author.loginname}</span>
                  <span>{moment(`${this.state.data.create_at}`).fromNow()}</span>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: marked(this.state.data.content) }} className='markdown-body' />
              <h3>{this.state.data.reply_count} 回复</h3>
              {this.state.data.replies.map((item, index) => {
                let content = marked(item.content)
                return (
                  <Replies key={index} content={content} data={item} />
                )
              })}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Topic
