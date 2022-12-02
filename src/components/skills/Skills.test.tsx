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

    it("Should render login button", () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole('button',{
            name: "Login"
        });
        expect(loginButton).toBeInTheDocument();
    })

    it("Should not render start learning button", () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.queryByRole('button',{
            name: "Start learning"
        });
        expect(loginButton).not.toBeInTheDocument();
    })

    it("Should render start learning button eventually", async () => {
        render(<Skills skills={skills}></Skills>);
        const startLearningButton = await screen.findByRole("button",
        {
            name: "Start learning"
        },
        {
            timeout: 2000
        })
        expect(startLearningButton).toBeInTheDocument();
    })
})