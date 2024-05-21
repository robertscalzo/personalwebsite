import {describe, it} from 'vitest';
import {render, screen} from "@testing-library/react";
import {Engineering} from "../Engineering.tsx";

describe("Engineering tests", () => {
    it("should show text", () => {
        render(<Engineering text={"hello"}/>);
        expect(screen.getByText("hello")).toBeVisible();
    });
});