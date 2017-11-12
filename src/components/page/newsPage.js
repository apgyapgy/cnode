import React, { Component } from 'react'
import { Footer, RequestFn } from '../index'
class NewsPage extends Component {
  constructor () {
    super()
    this.state = {
      data : []
    }
  }
  async componentWillMount () {
    let data = await RequestFn({ url: '/messages', params:{ accesstoken:localStorage.token, mdrender: false } })
    this.setState({
      data:data.data.data.hasnot_read_messages
    })
  }
  render () {
    return (
      <div className='rootBox'>
        <header className='news-title'>未读消息</header>
        <div className='news-content'>
          没消息，不知道怎么写
        </div>
        <Footer />
      </div>
    )
  }
}

export default NewsPage
