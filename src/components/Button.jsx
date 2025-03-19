import React from 'react'

function Button({text,className,handleClick}) {
  return (
    <div>
      <button  onClick={handleClick} className={`px-4 py-2 rounded-xl text-white ${className}`}>{text}</button>
    </div>
  )
}

export default Button
