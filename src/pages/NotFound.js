import React from 'react'
import error from '../assets/error.jpeg'

const NotFound = () => {
  return (
    <>
      <img
        className='notfound-img'
        src='https://media-exp1.licdn.com/dms/image/C5603AQHkAU0y3fBMyg/profile-displayphoto-shrink_200_200/0/1578530185918?e=1669248000&v=beta&t=V22IgiEkd-350WRk0lgWpYIoOs2vaQPlzVDFN6VbHqQ' alt='error'
      />
      <div className='notfound-text'>
        <h1> Well, you don't belong here. </h1>
        <h1> Sorry Traveler, you gotta go back. </h1>
      </div>
    </>
  )
}

export default NotFound
