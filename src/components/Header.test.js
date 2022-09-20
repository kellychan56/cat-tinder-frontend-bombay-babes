import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'


describe("<Header/>", () => {
    render(<Header/>)
    const homeLink = screen.getByText(/Final Fantasy Tinder/i)
    const indexLink = screen.getByText(/Index/i)
    const newLink = screen.getByText(/New/i)

    it("Header renders without error", () => {
        expect(homeLink).toBeInTheDocument()
        expect(indexLink).toBeInTheDocument()
        expect(newLink).toBeInTheDocument()
    })
    it("nav links are clickable", () => {
        render(<Header/>)
        userEvent.click(homeLink)
        userEvent.click(indexLink)
        userEvent.click(newLink)

        expect(screen.getByText(/Final Fantasy Tinder/i)).toBeInTheDocument()
        expect(screen.getByText(/Index/i)).toBeInTheDocument()
        expect(screen.getByText(/New/i)).toBeInTheDocument()
    })
    it("check if Header renders with className", () => {
        const { container } = render(<Header/>)
        const navItems = container.getElementsByClassName('nav-items')
        expect(navItems.length).toBe(3)
    })
})
