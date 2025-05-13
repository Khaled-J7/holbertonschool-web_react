import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test('displays title "Course list" when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByRole('heading', { name: /Course list/i })).toBeInTheDocument();
  });

  test('displays title "Log in to continue" when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByRole('heading', { name: /Log in to continue/i })).toBeInTheDocument();
  });

  test('displays title "News from the School" and paragraph by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /News from the School/i })).toBeInTheDocument();
    expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
  });

  test('calls alert with "Logging you out" on Ctrl+H key press', async () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<App isLoggedIn={true} />);
    const user = userEvent.setup();

    await user.keyboard('{Control>}h{/Control}');
    expect(mockAlert).toHaveBeenCalledWith('Logging you out');
    mockAlert.mockRestore();
  });

  test('calls logOut function on Ctrl+H key press', async () => {
    const mockLogOut = jest.fn();
    render(<App isLoggedIn={true} logOut={mockLogOut} />);
    const user = userEvent.setup();

    await user.keyboard('{Control>}h{/Control}');
    expect(mockLogOut).toHaveBeenCalled();
  });
});