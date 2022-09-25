import { screen, render } from '@testing-library/react'
import FinalFantasyNew from './FinalFantasyNew'
import { BrowserRouter } from 'react-router-dom'


describe("<FinalFantasyNew/>", () => {
    it("FinalFantasyNew renders without error", () => {
        render(
            <BrowserRouter>
                <FinalFantasyNew/>
            </BrowserRouter>
            )

        const heading = screen.getByRole("heading", {name: /Add a New Profile/i})

        expect(heading).toBeInTheDocument()
    })
    it("form has input fields", () => {
        render(
            <BrowserRouter>
                <FinalFantasyNew/>
            </BrowserRouter>        )

        const textbox = screen.getAllByRole("textbox")

        expect(textbox[0]).toBeEnabled()
    })
})
