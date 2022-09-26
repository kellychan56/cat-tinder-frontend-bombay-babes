import { screen, render } from '@testing-library/react'
import Home from './Home'

describe("<Home/>", () => {
    it("Home has an image with src and alt attributes", () => {
        render(<Home/>)
        const img = screen.getByRole('img')

        expect(img).toHaveAttribute('src', 'ffstorylogo.jpeg')
        expect(img).toHaveAttribute('alt', 'Final Fantasy Logo')
    })
})
