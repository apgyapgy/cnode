import React, { Component } from 'react'
import { Footer } from '../index'
class UserHome extends Component {
  render () {
    return (
      <div className='rootBox'>
        <header className='userhome-title'>用户中心</header>
        <div className='userhome-content'>
          <div className='userhome-avatar' />
          <div className='username-col_fade'>我发表的</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default UserHome
