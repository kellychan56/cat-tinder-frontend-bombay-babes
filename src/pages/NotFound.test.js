import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'

describe("<NotFound/>", () => {
    it("NotFound renders without error", () => {
        render(<NotFound/>)
        const notFound = screen.getByText(/NotFound/i)

        expect(notFound).toBeInTheDocument()
    })
    it("NotFound has an image with src and alt attributes", () => {
        render(<NotFound/>)
        const img = screen.getByRole('img')

        expect(img).toHaveAttribute('src', 'error.jpeg')
        expect(img).toHaveAttribute('alt', 'error')
    })
})
