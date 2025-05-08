import {render, screen} from '@testing-library/react'
import Login from '../Login/Login.jsx'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Notifications from '../Notifications/Notifications.jsx'  

test("testing if header is rendered", () => {
    render(<Header/>)
    const h = screen.getByRole("heading")
    expect(h).toBeInTheDocument()
})

test("checking if login is rendered", () => {
    render(<Login/>)
    const l = screen.getByText("Login to access the full dashboard")
    expect(l).toBeInTheDocument()
})

test("checking if footer is rendered", () => {
    render(<Footer/>)
    const f = screen.getByText("Copyright 2025 - Holberton School main dashboard")
    expect(f).toBeInTheDocument()
})

test("checking if notifications is rendered", () => {
    render(<Notifications/>)
    const n = screen.getByText("Here is the list of notifications")
    expect(n).toBeInTheDocument()
})