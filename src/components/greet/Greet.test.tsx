import { render, screen } from "@testing-library/react";
import Greet from "./greet";

it("Greet renders correctly", () => {
    render(<Greet></Greet>);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
})

it("Greet renders with a name", () => {
    render(<Greet name="Jewoo"></Greet>);
    const textElement = screen.getByText(/Hello Jewoo/);
    expect(textElement).toBeInTheDocument();
})
