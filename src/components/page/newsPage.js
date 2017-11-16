import React, { Component } from 'react'
import { Footer, RequestFn } from '../index'
import { connect } from 'react-redux'
class NewsPage extends Component {
  constructor () {
    super()
    this.state = {
      data : []
    }
  }
  async componentWillMount () {
    let data = await RequestFn({ url: '/messages', params:{ accesstoken:this.props.loginState, mdrender: false } })
    this.setState({
      data:data.data.data.hasnot_read_messages
    })
  }
  render () {
    return (
      <div className='Abs-float Root'>
        <header className='Abs-float AppHeader'>
          <h2>未读消息</h2>
        </header>
        <div className='Abs-float news-content'>
          没消息，不知道怎么写
        </div>
        <Footer />
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
export default connect(mapStateToProps)(NewsPage)
