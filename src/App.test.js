import { render, screen } from '@testing-library/react';
import App from './App';

it('should render learn react link', () => {
  render(<App />);
  const title = screen.getByText('Welcome to your credit card checker!');
  expect(title).toBeInTheDocument();
});
