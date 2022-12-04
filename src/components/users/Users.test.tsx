import { render, screen } from "../../test-utils";
import { Users } from "./Users";

describe("Users", () => {
    it("Should render correctly", () => {
        render(<Users></Users>);

        const heading = screen.getByRole("heading", {
            level: 1
        });

        expect(heading).toBeInTheDocument();
    })

    it("Should render a list of users", async () => {
        render(<Users></Users>);
        const users = await screen.findAllByRole("listitem");
        expect(users).toHaveLength(3);
    })
})