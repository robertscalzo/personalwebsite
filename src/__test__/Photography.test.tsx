import {describe, it} from 'vitest';
import { render, screen} from "@testing-library/react";
import {Photography} from "../components/Photography.tsx";

describe("Photography tests",()=>{
    it("should show text",()=>{
        render(<Photography text={"hello"}/>);
        expect(screen.getByText("hello")).toBeVisible();
    });
});