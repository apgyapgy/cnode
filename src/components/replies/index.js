// 拆分出评论列表，不拆分的话，实现起来很困难
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Like, Reply } from '../index'
import moment from 'moment'
class Replies extends Component {
  render () {
    return (
      <div>
        <div className='topic-replies markdown-body'>
          <div flex='flex' className='topic-replies-item'>
            <img src={this.props.data.author.avatar_url} alt='avatar' />
            <div flex='flex'>
              <Link to={`/user/${this.props.data.author.loginname}`}>{this.props.data.author.loginname}</Link>
              <span>发布于:{moment(`${this.props.data.create_at}`).fromNow()}</span>
              <Like ups={this.props.data.ups} id={this.props.data.id} />
              <Reply />
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </div>
      </div>
    )
  }
}
export default Replies
