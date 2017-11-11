import React, { Component } from 'react'
import { Header, Footer, IndexContent, Loading, RequestFn } from '../index'
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
  async componentWillMount () {
    let data = await RequestFn({ url: '/topics', params:{ page: this.state.page, tab: this.state.tab } })
    this.setState((prevState) => {
      return {
        content: data.data.data,
        status: true,
        page: prevState.page + 1,
        loading: false
      }
    })
  }
  async componentWillUpdate (nextProps) {
    if (!(nextProps.location.search === this.props.location.search)) { // 判断前后参数是否相等（相等则不触发）
      let search = nextProps.location.search ? nextProps.location.search.slice(5) : 'all' // 截取字符串
      console.log(111, search)
      // 前后参数不相等触发请求
      let data = await RequestFn({ url: '/topics', params: { tab: search } })
      this.scroll.scrollTop = 0 // 切换tab之后滚动条位置归零
      this.setState({
        content: data.data.data,
        status: true,
        page: 1,
        tab: search
      })
    }
  }
  componentDidMount () { // 挂载scroll监听
    this.scroll.addEventListener('scroll', this.onScrollHandle)
  }
  onScrollHandle = async (event) => {
    const clientHeight = event.target.clientHeight
    const scrollHeight = event.target.scrollHeight
    const scrollTop = event.target.scrollTop
    if ((clientHeight + scrollTop).toFixed(0) * 1 === scrollHeight) {
      this.setState({
        loading: true
      })
      let data = await RequestFn({ url: '/topics', params:{ page: this.state.page, tab: this.state.tab }
      })
      this.setState((prevState) => {
        let datas = prevState.content.concat(data.data.data)
        return {
          content: datas,
          status:true,
          page: prevState.page + 1,
          loading: false
        }
      })
    }
  }
  componentWillUnmount () { // 卸载监听
    this.scroll.removeEventListener('scroll', this.onScrollHandle)
  }
  render () {
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
