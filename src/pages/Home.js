import React from 'react'
import ffLogo from '../assets/ffstorylogo.jpeg'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="home">
        <img className="home-img" src={ffLogo} alt="Final Fantasy Logo"></img>
      </div>
      <div className='home-button'>
        <NavLink to={'/finalfantasyindex'} className="nav-link">
          <Button
            style={{
              color: "white",
              backgroundColor: "rgb(10,116,193)",
              fontSize: '2rem'
            }}>
            Begin Your Journey
          </Button>
        </NavLink>
      </div>
    </>
  )
}

export default Home
