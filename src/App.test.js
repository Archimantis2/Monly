import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header component with the logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});
