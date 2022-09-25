import { screen, render } from '@testing-library/react'
import FinalFantasyEdit from './FinalFantasyEdit'
import { BrowserRouter } from 'react-router-dom'


describe("<FinalFantasyEdit/>", () => {
    it("FinalFantasyEdit renders without error", () => {
        render(
            <BrowserRouter>
                <FinalFantasyEdit/>
            </BrowserRouter>
            )

        const heading = screen.getByRole("heading", {name: /Edit/i})

        expect(heading).toBeInTheDocument()
    })
    it("form has input fields", () => {
        render(
            <BrowserRouter>
                <FinalFantasyEdit/>
            </BrowserRouter>        )

        const textbox = screen.getAllByRole("textbox")

        expect(textbox[0]).toBeEnabled()
    })
})
