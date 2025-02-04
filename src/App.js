import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import FinalFantasyEdit from './pages/FinalFantasyEdit';
import FinalFantasyIndex from './pages/FinalFantasyIndex';
import FinalFantasyNew from './pages/FinalFantasyNew';
import FinalFantasyShow from './pages/FinalFantasyShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route, json } from "react-router-dom";
import characters from './mockFinalFantasy';
import './App.css'



const App = () => {

  const [charProfile, setCharProfile] =  useState([])

  useEffect(() => {
    readChar()
  }, [])

  const readChar = () => {
    fetch("https://ff-tinder-backend.herokuapp.com/characters")
    .then(response => response.json())
    .then(payload => setCharProfile(payload))
    .catch(error => console.log(error))
  }

  const createChar = (char) => {
    fetch("https://ff-tinder-backend.herokuapp.com/characters", {
      body: JSON.stringify(char),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => readChar())
    .catch(error => console.log("Character create error:", error))
  }

  const updateChar = (char, id) => {
    fetch(`https://ff-tinder-backend.herokuapp.com/characters/${id}`, {
      body: JSON.stringify(char),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => readChar())
    .catch(error => console.log("Character update error:", error))
  }

  const deleteChar = (id) => {
    fetch(`https://ff-tinder-backend.herokuapp.com/characters/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => readChar())
    .catch(error => console.log("Character delete error:", error))
    .finally(() => readChar())
  }

  return (
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/finalfantasyindex"
        element={<FinalFantasyIndex
          charProfile={charProfile}
          />}
        />
      <Route
        path="/finalfantasyshow/:id"
        element={<FinalFantasyShow
          charProfile={charProfile}
          />}
          />
      <Route
        path="/finalfantasynew"
        element={<FinalFantasyNew
          createChar={createChar}
          />}
          />
      <Route
        path="/finalfantasyedit/:id"
        element={<FinalFantasyEdit
          charProfile={charProfile}
          updateChar={updateChar}
          deleteChar={deleteChar}
        />}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </main>
  );
}

export default App;
