import React, { Component } from 'react'
import axios from 'axios'
import { Header, Footer, IndexContent, Loading } from '../index'
class IndexPage extends Component {
  constructor () {
    super()
    this.state = {
      status: false,
      page:1,
      content: [],
      tab: 'all',
      loading: true
    }
  }
  componentWillMount () {
    this.getTopics({ params:{ page: this.state.page, tab: this.state.tab } })
      .then((res) => {
        this.setState((prevState) => {
          return {
            content: res.data.data,
            status:true,
            page: prevState.page + 1,
            loading: false
          }
        })
      })
  }
  componentWillUpdate (nextProps) {
    if (!(nextProps.location.search === '')) { // 判断url内存在查询参数
      if (!(nextProps.location.search === this.props.location.search)) { // 判断前后参数是否相等（相等则不触发）
        let search = nextProps.location.search.slice(5) // 截取字符串
        // 前后参数不相等触发请求
        this.getTopics({ params:{ tab:search } })
          .then((res) => {
            this.setState({
              content: res.data.data,
              status:true,
              page:1,
            })
          })
      }
    }
  }
  componentDidMount () { // 挂载scroll监听
    this.scroll.addEventListener('scroll', this.onScrollHandle)
  }
  onScrollHandle = (event) => {
    const clientHeight = event.target.clientHeight
    const scrollHeight = event.target.scrollHeight
    const scrollTop = event.target.scrollTop
    if (clientHeight + scrollTop === scrollHeight) {
      this.setState({
        loading: true
      })
      this.getTopics({ params:{ page: this.state.page, tab: this.state.tab } })
        .then((res) => {
          this.setState((prevState) => {
            let data = prevState.content.concat(res.data.data)
            console.log(data)
            return {
              content: data,
              status:true,
              page: prevState.page + 1,
              loading: false
            }
          })
        })
    }
  }
  componentWillUnmount () { // 卸载监听
    this.scroll.removeEventListener('scroll', this.onScrollHandle)
  }
getTopics = (data) => {
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
  console.log(this.props)
  return (
    <div className='rootBox'>
      <Header />
      <div className='content-box' ref={node => { this.scroll = node }}>
        <ul >
          {this.state.status ? <IndexContent data={this.state.content} /> : ''}
        </ul>
        <Loading loading={this.state.loading} />
      </div>
      <Footer />
    </div>
  )
}
}

export default IndexPage
