import {screen, render, logRoles} from '@testing-library/react';
import user from "@testing-library/user-event";
import { Counter } from './Counter';

describe("Counter", () => {
    it("Should render correctly", () => {
        render(<Counter/>);

        const heading = screen.getByRole("heading",{
            level: 1
        });

        expect(heading).toBeInTheDocument();

        const incrementButton = screen.getByRole("button",{
            name: "Increment"
        });
        expect(incrementButton).toBeInTheDocument();
    })

    it("Should render count of 0", () => {
        render(<Counter></Counter>);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    })

    it("Should render a count of 1 after clicking the increment button",async () => {
        user.setup();
        render(<Counter></Counter>);
        const heading = screen.getByRole("heading",{
            level: 1
        });
        const incrementButton = screen.getByRole("button",{
            name: "Increment"
        });
        await user.click(incrementButton);
        expect(heading).toHaveTextContent("1");
    })

    it("Should render a count of 2 after clicking the increment button twice", async () => {
        user.setup();
        render(<Counter></Counter>);
        const heading = screen.getByRole("heading", {
            level: 1
        });
        const countButton = screen.getByRole("button",{
            name: "Increment"
        });
        await user.click(countButton);
        await user.click(countButton);
        
        expect(heading).toHaveTextContent("2");
    })

    it("Should render a count of 10 after clicking set button",async () => {
        user.setup();
        const {container} = render(<Counter></Counter>);
        logRoles(container);
        const amountInput = screen.getByRole("spinbutton");
        await user.type(amountInput, '10');
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole("button",{
            name: "Set"
        });
        await user.click(setButton);
        const heading = screen.getByRole("heading",{
            level: 1
        });
        expect(heading).toHaveTextContent("10");
    })

    it("Should foucs elements in the right order", async () => {
        user.setup();
        render(<Counter/>);
        const amountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button", {
            name: "Set"
        });
        const incrementButton = screen.getByRole("button",{
            name: "Increment"
        });

        await user.tab();
        expect(incrementButton).toHaveFocus();
        await user.tab();
        expect(amountInput).toHaveFocus();
        await user.tab();
        expect(setButton).toHaveFocus();
    })
    
})