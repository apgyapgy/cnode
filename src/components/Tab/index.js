import React from 'react'

const Tab = (props) => {
  const { good, top } = props
  return (
    <div className='content-tab'>
      { good && <span className='content-tab-good'>精</span> }
      { top && <span className='content-tab-top'>顶</span> }
    </div>
  )
}
export default Tab
