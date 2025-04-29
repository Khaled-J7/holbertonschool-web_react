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
    const footerParagraph = screen.getByText(new RegExp(`copyright ${currentYear} - holberton school`, 'i'));
    expect(footerParagraph).toBeInTheDocument();
  });

  it('renders an img element with alt text "holberton logo"', () => {
    render(<App />);
    const logoImage = screen.getByAltText(/holberton logo/i);
    expect(logoImage).toBeInTheDocument();
  });
});
