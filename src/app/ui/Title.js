import React from 'react'

const Title = (props) => {
  return (
    <div className='mb-4 md:mb-8'>
    <h2 className={`text-3xl md:text-6xl text-title  ${props.center}`}>{props.en}</h2>
    <p className={`text-white text-lg md:text-2xl ${props.center}`}>{props.ja}</p>
    </div>
  )
}

export default Title