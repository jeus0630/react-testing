import {screen, render} from "@testing-library/react";
import {AppProviders} from "../../providers/app-providers";
import { MuiMode } from "./MuiMode";


describe("MuiMode", () => {
    it("Should render text correctly",() => {
        render(<MuiMode></MuiMode>, {
            wrapper: AppProviders
        });
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    })
})