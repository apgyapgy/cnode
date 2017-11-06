import React, { Component } from 'react'
import axios from 'axios'
import { Header, Footer, IndexContent } from '../index'
class IndexPage extends Component {
  constructor () {
    super()
    this.state = {
      status: false,
      page:1,
      content: [],
      tab: 'all',
    }
  }
  componentWillMount () {
    this.getTopics({ params:{ page: this.state.page, tab: this.state.tab } })
      .then((res) => {
        this.setState((prevState) => {
          return {
            content: res.data.data,
            status:true,
            page: prevState.page + 1
          }
        })
      })
  }
  onScrollHandle = (event) => {
    const clientHeight = event.target.clientHeight
    const scrollHeight = event.target.scrollHeight
    const scrollTop = event.target.scrollTop
    console.log(clientHeight + scrollTop, scrollHeight)
    if (clientHeight + scrollTop === scrollHeight) {
      console.log(1)
      this.getTopics({ params:{ page: this.state.page, tab: this.state.tab } })
        .then((res) => {
          this.setState((prevState) => {
            let data = prevState.content.concat(res.data.data)
            console.log(data)
            return {
              content: data,
              status:true,
              page: prevState.page + 1
            }
          })
        })
    }
  }
  componentDidMount () { // 挂载scroll监听
    this.scroll.addEventListener('scroll', this.onScrollHandle)
  }
  componentWillUnmount () { // 卸载监听
    this.scroll.removeEventListener('scroll', this.onScrollHandle)
  }
getTopics = (data) => {
  console.log(data)
  return (
    axios.get('/topics', {
      params:{
        limit:10,
        mdrender:false,
        ...data.params
      }
    })
  )
}
render () {
  console.log(this.state)
  return (
    <div className='rootBox'>
      <Header />
      <div className='content-box' ref={node => { this.scroll = node }}>
        <ul >
          {this.state.status ? <IndexContent data={this.state.content} /> : ''}
        </ul>
      </div>
      <Footer />
    </div>
  )
}
}

export default IndexPage
