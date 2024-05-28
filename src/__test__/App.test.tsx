import {describe, it} from 'vitest'
import {fireEvent, render, screen} from "@testing-library/react";
import {App} from "../App.tsx";
import {MemoryRouter} from "react-router-dom";

function renderWithRouter() {
    render(<MemoryRouter><App/></MemoryRouter>);
}

describe('App test', () => {
    it("should show header tabs", () => {
        renderWithRouter();

        expect(screen.getByRole("button", {name: "Photography"})).toBeVisible();
        expect(screen.getByRole("button", {name: "About"})).toBeVisible();
        expect(screen.getByRole("button", {name: "Skills"})).toBeVisible();
        expect(screen.getByRole("button", {name: "RESUME"})).toBeVisible();
    });
    it("should change between tabs when clicked", async () => {
        renderWithRouter();

        fireEvent.click(screen.getByRole("button", {name: "Photography"}));
        const photography = await screen.findByText("Hello");

        expect(photography).toBeVisible();
    });
});