import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders the h1 element with text "School dashboard"', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders paragraph texts correctly in app-body and app-footer', () => {
    render(<App />);
    
    // Check app-body paragraph
    const bodyParagraph = screen.getByText(/login to access the full dashboard/i);
    expect(bodyParagraph).toBeInTheDocument();
    
    // Check app-footer paragraph - using a regex to match the dynamic year
    const currentYear = new Date().getFullYear();
    const footerParagraph = screen.getByText(new RegExp(`copyright ${currentYear} - holberton school main dashboard`, 'i'));
    expect(footerParagraph).toBeInTheDocument();
  });

  it('renders an img element with alt text "holberton logo"', () => {
    render(<App />);
    const logoImage = screen.getByAltText(/holberton logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  // New tests for the sign-in form
  it('renders 2 input elements', () => {
    render(<App />);
    const inputElements = screen.getAllByRole('textbox') // This gets all text inputs (note: password inputs have a different role)
      .concat(screen.getAllByLabelText(/password/i)); // This adds the password input specifically
    
    expect(inputElements.length).toBe(2);
  });

  it('renders labels for email and password inputs', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  it('renders a button with text "OK"', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /ok/i });
    
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toMatch(/ok/i);
  });
});
