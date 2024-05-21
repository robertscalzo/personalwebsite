import {describe, it} from 'vitest'
import {fireEvent, render, screen} from "@testing-library/react";
import {App} from "../App.tsx";

describe('App test', () => {
    it("should show header tabs", () => {
        render(<App/>);

        const headingTabs = screen.getByRole("tablist");
        expect(screen.getByRole("tab", {name: "Photography"})).toBeVisible();
        expect(screen.getByRole("tab", {name: "Engineering"})).toBeVisible();
        expect(headingTabs).toBeVisible();
    });
    it("should show engineering tab on load", async () => {
        render(<App/>);

        expect(screen.getByText("Goodbye")).toBeVisible();
    });
    it("should change between tabs when clicked", async () => {
        render(<App/>);

        fireEvent.click(screen.getByRole("tab", {name: "Photography"}));

        expect(await screen.findByText("Hello")).toBeVisible();
    });
});