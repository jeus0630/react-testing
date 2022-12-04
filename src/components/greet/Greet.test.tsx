import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  it('renders correctly', () => {
    render(<Greet></Greet>);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
    expect(textElement).not.toBeInTheDocument();
  });

  it('renders with a name', () => {
    render(<Greet name="Jewoo"></Greet>);
    const textElement = screen.getByText(/Hello Jewoo/);
    expect(textElement).toBeInTheDocument();
  });
});
