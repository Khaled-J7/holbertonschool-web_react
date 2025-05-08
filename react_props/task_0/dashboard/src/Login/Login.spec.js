import {render, screen} from '@testing-library/react'
import Login from './Login.jsx'
import userEvent from '@testing-library/user-event'

describe("Login component", () => {
    it("are the input elements renderd", () => {
        render(<Login />)
        const allInputs = screen.getAllByRole("textbox")
        allInputs.map((elem) => {expect(elem).toBeInTheDocument()})
    })
    it("are the labels rendred", () => {
        render(<Login />)
        const email = screen.getByLabelText("Email")
        const pw = screen.getByLabelText("Password")
        expect(email).toBeInTheDocument()
        expect(pw).toBeInTheDocument()
    })
    it("is the button rendred", () => {
        render(<Login />)
        const btn = screen.getByTestId("btn")
        expect(btn).toBeInTheDocument()
        expect(btn.textContent).toMatch(/OK/)
    })
    it("checking if the input is focused if a label is clicked", async () => {
        render(<Login />)
        const userE = userEvent.setup()
        const inp = screen.getByTestId("pw")
        await userE.click(screen.getByLabelText("Password"))
        expect(inp).toBe(document.activeElement)
    })
})