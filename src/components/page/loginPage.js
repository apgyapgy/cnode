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
  componentWillMount () { // 页面加载前判断一下token是否存在，如果存在则直接回首页
    if (localStorage.token) {
      this.props.history.push('/')
    }
  }
  handelChange = (e) => {
    this.setState({
      key:e.target.value
    })
  }
  handleSubmit = async () => {
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
        localStorage.token = this.state.key // 服务端验证成功之后在本地存上用户token
        let { pathname } = this.props.history.location.state.from // 读取重定向传过来的的参数
        this.props.history.push(pathname) // 跳转回重定向过来的页面
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
