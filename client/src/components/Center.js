import React from 'react'

const Center = ({classes,children}) => {
  return (
    <div className={`${classes} flex justify-center align-center`}>
      {children}
    </div>
  )
}

export default Center