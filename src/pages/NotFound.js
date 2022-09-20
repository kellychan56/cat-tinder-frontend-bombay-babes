import React from 'react'
import error from '../assets/error.jpeg'

const NotFound = () => {
  return (
    <>
      <img src={error}></img>
      <div className='notfound'>NotFound</div>
    </>
  )
}

export default NotFound
