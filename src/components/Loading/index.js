import React from 'react'
const Loading = (props) => {
  if (props.loading) {
    return (
      <div className='sk-wave'>
        <div className='sk-rect sk-rect1' />
        <div className='sk-rect sk-rect2' />
        <div className='sk-rect sk-rect3' />
        <div className='sk-rect sk-rect4' />
        <div className='sk-rect sk-rect5' />
      </div>
    )
  } else {
    return null
  }
}
export default Loading
