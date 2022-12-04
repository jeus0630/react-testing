import { render, screen, logRoles } from "../../test-utils";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo", () => {
    it("Should render correctly", () => {
        const { container } = render(<CounterTwo count={0}></CounterTwo>);
        logRoles(container);
        const headingElement = screen.getByRole("heading", {
            level: 1
        })

        expect(headingElement).toBeInTheDocument();
    })

    it("Handlers should be called", async () => {
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();

        render(<CounterTwo count={0}
            handleIncrement={incrementHandler}
            handleDecrement={decrementHandler}
        ></CounterTwo>);

        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        });

        const decrementButton = screen.getByRole("button", {
            name: "Decrement"
        });

        await user.click(incrementButton);
        await user.click(decrementButton);

        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    })

})