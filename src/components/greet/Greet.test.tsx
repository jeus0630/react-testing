import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet",() => {
    it("renders correctly", () => {
        render(<Greet></Greet>);
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument();
    })
    
    it("renders with a name", () => {
        render(<Greet name="Jewoo"></Greet>);
        const textElement = screen.getByText(/Hello Jewoo/);
        expect(textElement).toBeInTheDocument();
    })
})
