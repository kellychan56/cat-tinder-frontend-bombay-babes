import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import FinalFantasyEdit from './pages/FinalFantasyEdit';
import FinalFantasyIndex from './pages/FinalFantasyIndex';
import FinalFantasyNew from './pages/FinalFantasyNew';
import FinalFantasyShow from './pages/FinalFantasyShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";
import characters from './mockFinalFantasy';
import './App.css'



const App = () => {

  const [charProfile, setCharProfile] =  useState(characters)

  return (
  <>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/finalfantasyindex" element={<FinalFantasyIndex charProfile={charProfile}/>} />
      <Route path="/finalfantasyshow/:id" element={<FinalFantasyShow charProfile={charProfile}/>} />
      <Route path="/finalfantasynew" element={<FinalFantasyNew />} />
      <Route path="/finalfantasyedit" element={<FinalFantasyEdit />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
   </>
   );
}

export default App;
