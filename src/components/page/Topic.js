import React, { Component } from 'react'
import axios from 'axios'
import marked from 'marked'
import { Link } from 'react-router-dom'
import { Loading } from '../index'
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
      content: '',
      loading: true,
      replies: ''
    }
  }
  async componentWillMount () {
    let data = await this.getTopic(`${this.props.match.params.id}`)
    this.setState({
      content: marked(data.data.data.content),
      replies: data.data.data.replies,
      loading: false
    })
  }
  getTopic = (url) => {
    return axios.get(`/topic/${url}`, {
      params: {
        mdrender: false
      }
    })
      .then(res => res)
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
              <div dangerouslySetInnerHTML={{ __html: this.state.content }} className='markdown-body' />
              {this.state.replies.map((item, index) => {
                let content = marked(item.content)
                return (
                  <div className='topic-replies markdown-body' key={index} flex='flex'>
                    <div><img src={item.author.avatar_url} alt='avatar' /></div>
                    <div className='topic-replies-item'>
                      <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                      <span>{moment(`${item.create_at}`).fromNow()}</span>
                      <div dangerouslySetInnerHTML={{ __html:content }} />
                    </div>
                  </div>
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
