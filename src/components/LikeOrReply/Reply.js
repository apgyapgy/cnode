import React from 'react'

const Reply = ({ reply = true, placeholder, onChange, submit, style, value, defaultValue }) => {
  return reply && <div style={{ ...style }}>
    <textarea className='Reply'
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    <a className='Reply-botton ripple' onClick={submit}>提交</a>
  </div>
}

export default Reply
