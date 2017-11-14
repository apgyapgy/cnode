import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Footer, RequestFn, Message } from '../index'
import axios from 'axios'
class UserHome extends Component {
  constructor () {
    super()
    this.state = {
      user: {},
      userList:{},
      status: false
    }
  }
  async componentWillMount () {
    try {
      let user = await axios.post('/accesstoken', {
        accesstoken: localStorage.token
      })
        .then(res => res)
      let userList = await RequestFn({ url:`/user/${user.data.loginname}` })
      this.setState({
        user:user.data,
        userList:userList.data,
        status:true
      })
    } catch (err) {
      localStorage.removeItem('token')
      Message.error(`${err.response.data.error_msg}`)
      this.props.history.push('/login')
    }
  }
  render () {
    console.log(this.state.userList)
    return (
      <div className='rootBox'>
        <header className='userhome-title'>用户中心</header>
        <div className='userhome-content'>
          <div className='userhome-avatar'>
            {this.state.user.avatar_url && <img src={this.state.user.avatar_url} alt='avatar' /> }
          </div>
          <div className='username-col_fade'>我发表的</div>
          {this.state.status && this.state.userList.data.recent_topics.map((item, index) => (
            <Link to={`/topic/${item.id}`} key={index} className='userhome-title-list'>{ item.title }</Link>
          )) }
        </div>
        <Footer />
      </div>
    )
  }
}

export default UserHome
