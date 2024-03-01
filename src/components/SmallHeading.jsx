import React from 'react'

const BigHeading = ({children , className}) => {
  return (
    <div className={className}>
      <h2 className='text-[60px] font-bold leading-none'>{children}</h2>
    </div>
  )
}

export default BigHeading