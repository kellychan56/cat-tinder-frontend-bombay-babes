import { screen, render } from '@testing-library/react'
import FinalFantasyIndex from './FinalFantasyIndex'
import characters from '../mockFinalFantasy'
import { BrowserRouter } from 'react-router-dom'

describe("<FinalFantasyIndex/>", () => {
    it("FinalFantasyIndex renders all characters without error", () => {
        render(
        <BrowserRouter>
            <FinalFantasyIndex charProfile={ characters }/>
        </BrowserRouter>)

        characters.forEach(character => {
            const characterName = screen.getByText(character.name)

            expect(characterName).toBeInTheDocument()
        })
    })
    it("FinalFantasyIndex has an image with src and alt attributes", () => {
        render(
        <BrowserRouter>
            <FinalFantasyIndex charProfile={ characters }/>
        </BrowserRouter>)

        characters.forEach(character => {
            const img = screen.getAllByRole("img")

            expect(img[0]).toHaveAttribute("src")
            expect(img[0]).toHaveAttribute("alt")
        })
    })
})
