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
            content: res.data,
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
    if (clientHeight + scrollTop === scrollHeight) {
      this.getTopics({ params:{ page: this.state.page, tab: this.state.tab } })
        .then((res) => {
          this.setState((prevState) => {
            return {
              content: res.data,
              status:true,
              page: prevState.page + 1
            }
          })
        })
    }
  }
  componentDidMount () {
    console.log(this.scroll)
    this.scroll.addEventListener('scroll', this.onScrollHandle)
  }
  componentWillUnmount () {
    this.scroll.removeEventListener('scroll', this.onScrollHandle)
  }
getTopics = (data) => {
  console.log(data)
  return (
    axios.get('/topics', {
      params:{
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
          {this.state.status ? <IndexContent data={this.state.content.data} /> : ''}
        </ul>
      </div>
      <Footer />
    </div>
  )
}
}

export default IndexPage
