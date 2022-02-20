import React from 'react'
import '../theme/button.css'

const Button = (props) => {
  const {outline, text, primary, w,h,r,onClick} = props

  return (
    <button
      onClick={onClick}
      className='customBtn' style={{
      width: w ? `${w}px` : '',
      height: h ? `${h}px` : '',
      borderRadius: r ? `${r}px` : '',
      background: primary ? '#82c400' : '#fff',
      border: 'none'
    }}>
      {props.text}
    </button>
  )
}

export default Button