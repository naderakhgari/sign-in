import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign in header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Sign-In/i);
  expect(headerElement).toBeInTheDocument();
});
