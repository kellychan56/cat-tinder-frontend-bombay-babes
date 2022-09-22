import { screen, render } from '@testing-library/react'
import FinalFantasyNew from './FinalFantasyNew'

describe("<FinalFantasyNew/>", () => {
    it("FinalFantasyNew renders without error", () => {
        render(<FinalFantasyNew/>)

        const heading = screen.getByRole("heading", {name: /Add a New Profile/i})

        expect(heading).toBeInTheDocument()
    })
    it("form has input fields", () => {
        render(<FinalFantasyNew/>)

        const textbox = screen.getAllByRole("textbox")

        expect(textbox[0]).toBeEnabled()
    })
})
