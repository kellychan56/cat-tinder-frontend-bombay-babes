import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'

describe("<NotFound/>", () => {
    it("NotFound renders an image with src and alt attributes", () => {
        render(<NotFound/>)
        const img = screen.getByRole('img')

        expect(img).toHaveAttribute('src', 'error.jpeg')
        expect(img).toHaveAttribute('alt', 'error')
    })
})
