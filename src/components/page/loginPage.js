import React, { Component } from 'react'
import axios from 'axios'
class Login extends Component {
  constructor () {
    super()
    this.state = {
      key:'',
      loginstate: ''
    }
  }
  handelChange = (e) => {
    this.setState({
      key:e.target.value
    })
  }
  handleSubmit = () => {
    if (this.state.key === '') {
      this.setState({
        loginstate: '请填写token'
      })
      return
    }
    axios.post('/accesstoken', {
      accesstoken:this.state.key
    })
      .then(res => {
        window.localStorage.token = this.state.key
        this.props.history.block()
      })
      .catch(err => {
        console.log(err)
        this.setState({
          loginstate: 'Token不正确'
        })
      })
  }
  render () {
    console.log(this.props)
    return (
      <div className='rootBox'>
        <header className='login-header'>
          <h2>登录</h2>
        </header>
        <div className='login-content'>
          <div className='login-content-input'>
            <input placeholder='请输入Access Token' name='key' onChange={this.handelChange} />
          </div>
          <button onClick={this.handleSubmit}>提交</button>
          <p className='longin-content-message'>{this.state.loginstate}</p>
        </div>
      </div>
    )
  }
}

export default Login
