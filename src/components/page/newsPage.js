import React, { Component } from 'react'
import { Footer } from '../index'
class NewsPage extends Component {
  render () {
    return (
      <div className='rootBox'>
        <header className='news-title'>未读消息</header>
        <div className='news-content'>
          暂无消息
        </div>
        <Footer />
      </div>
    )
  }
}

export default NewsPage
