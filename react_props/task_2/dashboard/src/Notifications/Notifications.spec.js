import Notifications from './Notifications.jsx'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { v4 as uuidv4 } from 'uuid'


test("testing if the paragraph text is correct", () => {
    render(<Notifications />)
    const p = screen.getByText(/Here is the list of notifications/i)
    expect(p).toBeInTheDocument()
})

test("checking the existance of the button element", () => {
    render(<Notifications />)
    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()
})


test("checking if the right text is logged when the button is clicked", async () => {
    render(<Notifications />)
    const spy = jest.spyOn(console, 'log')
    const btn = screen.getByRole("button")
    const user = userEvent.setup()
    await user.click(btn)
    expect(spy).toHaveBeenCalledWith("Close button has been clicked")
    spy.mockRestore()
})

test("checing if the component renders the 3 li tags", () => {
    const mnotifications = [
        {key: uuidv4(), type: "default", value: "New course available", html: undefined},
        {key: uuidv4(), type: "urgent", value: "New resume available", html: undefined},
        {key: uuidv4(), type: "urgent", value: "Urgent requirement - complete by EOD", html: undefined}
    ]

    render(<Notifications notifications={mnotifications}/>)
    const litag1 = screen.getByText("New course available")
    const litag2 = screen.getByText("New resume available")
    const litag3 = screen.getByText("Urgent requirement - complete by EOD")
    expect(litag1).toBeInTheDocument()
    expect(litag2).toBeInTheDocument()
    expect(litag3).toBeInTheDocument()
})
