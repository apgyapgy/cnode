import React, { Component } from 'react'
import { Message } from '../index'
import { connect } from 'react-redux'
import { LoginFn } from '../../store/ActionCreate'
import axios from 'axios'
class Login extends Component {
  constructor () {
    super()
    this.state = {
      key:'',
    }
  }
  componentWillMount () { // 页面加载前判断一下token是否存在，如果存在则直接回首页
    if (!(this.props.loginState === '')) {
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
      Message.warning('请填写token')
      return
    }
    axios.post('/accesstoken', {
      accesstoken:this.state.key
    })
      .then(res => {
        localStorage.token = this.state.key // 服务端验证成功之后在本地存上用户token
        this.props.login(this.state.key)
        let { pathname } = this.props.history.location.state.from // 读取重定向传过来的的参数
        this.props.history.push(pathname) // 跳转回重定向过来的页面
      })
      .catch(err => {
        console.log(err)
        Message.error('Token不正确')
      })
  }
  render () {
    console.log(this.props)
    return (
      <div className='Abs-float Root'>
        <header className='Abs-float AppHeader'>
          <h2>登录</h2>
        </header>
        <div className='Abs-float new-topic'>
          <input placeholder='请输入Access Token' name='key' onChange={this.handelChange} />
          <button className='login-button ripple' onClick={this.handleSubmit}>提交</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  console.log(state)
  return {
    loginState: state.LoginState.token
  }
}
function mapDispatchToProps (dispatch) {
  return {
    login: (token) => dispatch(LoginFn.UserLogin(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
