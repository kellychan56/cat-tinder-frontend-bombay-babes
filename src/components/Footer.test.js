import { screen, render } from '@testing-library/react'
import Footer from './Footer'

describe("<Footer/>", () => {
    it("Footer renders without error", () => {
        render(<Footer/>)
        const footer = screen.getByText(/Cody and Kelly/i)

        expect(footer).toBeInTheDocument()
    })
})
