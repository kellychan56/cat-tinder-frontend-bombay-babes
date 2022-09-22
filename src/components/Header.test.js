import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'


describe("<Header/>", () => {
    render(<Header/>)
    const homeLink = screen.getByText(/Final Fantasy Tinder/i)
    const indexLink = screen.getByText(/All Profiles/i)
    const newLink = screen.getByText(/Create New Profile/i)

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
        expect(screen.getByText(/All Profiles/i)).toBeInTheDocument()
        expect(screen.getByText(/Create New Profile/i)).toBeInTheDocument()
    })
    it("check if Header renders with className", () => {
        const { container } = render(<Header/>)
        const navItems = container.getElementsByClassName('nav-items')
        expect(navItems.length).toBe(2)
    })
})
