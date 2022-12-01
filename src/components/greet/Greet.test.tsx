import {render, screen} from '@testing-library/react';
import Greet from './greet';

it("Greet renders correctly", () => {
    render(<Greet></Greet>);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
})