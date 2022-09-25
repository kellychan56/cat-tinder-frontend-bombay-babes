import { screen, render } from '@testing-library/react'
import FinalFantasyEdit from './FinalFantasyEdit'
import { MemoryRouter, Route, Routes } from "react-router-dom"
import characters from '../mockFinalFantasy'


describe("<FinalFantasyEdit/>", () => {
    it("FinalFantasyEdit renders without error", () => {
        render(
            <MemoryRouter initialEntries={["/finalfantasyedit/1"]}>
                <Routes>
                    <Route path="/finalfantasyedit/:id" element={<FinalFantasyEdit charProfile={ characters }/>} />
                </Routes>
            </MemoryRouter>
            )

        const heading = screen.getByRole("heading", {name: /Edit/i})

        expect(heading).toBeInTheDocument()
    })
    it("form has input fields", () => {
        render(
            <MemoryRouter initialEntries={["/finalfantasyedit/1"]}>
                <Routes>
                    <Route path="/finalfantasyedit/:id" element={<FinalFantasyEdit charProfile={ characters }/>} />
                </Routes>
            </MemoryRouter>
            )

        const textbox = screen.getAllByRole("textbox")

        expect(textbox[0]).toBeEnabled()
    })
})
