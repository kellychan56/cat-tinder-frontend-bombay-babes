import React from 'react'
import ffLogo from '../assets/ffstorylogo.jpeg'

const Home = () => {
  return (
    <>
      <div className="home">
        <p>Home</p>
        <img id="home-img" src={ffLogo} alt="Final FantasyLogo"></img>
      </div>
    </>
  )
}

export default Home
