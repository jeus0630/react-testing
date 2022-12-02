import {render, screen} from '@testing-library/react';
import {Skills} from "./Skills";

describe("Skills", () => {
    const skills = ["HTML", "CSS", "JAVASCRIPT"];

    it("Should render correctly", () => {
        render(<Skills skills={skills}></Skills>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    it("Should render a list of skills", () => {
        render(<Skills skills={skills}></Skills>);
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    })

})