import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const TestComponent = () => <p>Differ</p>
  render(<TestComponent />);
  const linkElement = screen.getByText(/Sample Content/);
  expect(linkElement).toBeInTheDocument();
});
