import React from 'react'
const Loading = (props) => {
  if (props.loading) {
    return (
      <div className='loading' flex='flex'>
        <div className='load-item' />
        <div className='load-item1' />
        <div className='load-item2' />
        <div className='load-item3' />
        <div className='load-item4' />
        <div className='load-item5' />
      </div>
    )
  } else {
    return null
  }
}
export default Loading
