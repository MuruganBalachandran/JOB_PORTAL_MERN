import React from 'react'

const Button = ({onClickHandler,value,title}) => {
  return (
    <button onClick={onClickHandler} value={value} className='px-4 py-1 rounded border text-base hover:bg-primary hover:text-white'>
      {title}
    </button>
  )
}

export default Button
