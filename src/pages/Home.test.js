import { screen, render } from '@testing-library/react'
import Home from './Home'

describe("<Home/>", () => {
    it("Home renders without error", () => {
        render(<Home/>)
        const home = screen.getByText(/Home/i)

        expect(home).toBeInTheDocument()
    })
})
