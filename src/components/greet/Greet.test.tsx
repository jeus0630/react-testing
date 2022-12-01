import {render, screen} from '@testing-library/react';
import Greet from './greet';

it("Greet renders correctly", () => {
    render(<Greet></Greet>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})