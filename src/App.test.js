import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header saying Hello world!', () => {
  render(<App />);
  const pageHeader = screen.getByText(/Hello world!/i);
  expect(pageHeader).toBeInTheDocument();
});
