import React, { Component } from 'react'
import { Footer } from '../index'
import axios from 'axios'
class UserHome extends Component {
  constructor () {
    super()
    this.state = {
      user: {}
    }
  }
  componentWillMount () {
    axios.post('/accesstoken', {
      accesstoken: localStorage.token
    })
      .then(res => {
        this.setState({
          user: res.data
        })
      })
  }
  render () {
    console.log(this.state)
    return (
      <div className='rootBox'>
        <header className='userhome-title'>用户中心</header>
        <div className='userhome-content'>
          <div className='userhome-avatar'>
            {this.state.user.avatar_url && <img src={this.state.user.avatar_url} alt='avatar' /> }
          </div>
          <div className='username-col_fade'>我发表的</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default UserHome
