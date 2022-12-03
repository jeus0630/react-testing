import {screen, render} from "../../test-utils";
import { MuiMode } from "./MuiMode";


describe("MuiMode", () => {
    it("Should render text correctly",() => {
        render(<MuiMode></MuiMode>);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    })
})