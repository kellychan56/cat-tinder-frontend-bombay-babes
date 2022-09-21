import { screen, render } from '@testing-library/react'
import FinalFantasyShow from './FinalFantasyShow'
import { MemoryRouter, Route, Routes } from "react-router-dom"
import characters from '../mockFinalFantasy'



const renderComponent = () => {
    render(
      <MemoryRouter initialEntries={["/finalfantasyshow/1"]}>
        <Routes>
            <Route path="/finalfantasyshow/:id" element={<FinalFantasyShow charProfile={ characters }/>} />
        </Routes>
      </MemoryRouter>
    )
  } 
  describe('FinalFantasyShow', () => { 
      test("render a card with a characters interest", ()=>{
        renderComponent()
        expect(screen.getByText(characters[0].interests)).toBeInTheDocument()
      })
   })