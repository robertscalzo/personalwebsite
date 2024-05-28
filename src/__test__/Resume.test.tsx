import {describe, it} from 'vitest';
import { render, screen} from "@testing-library/react";
import {Resume} from "../components/Resume.tsx";

describe("Resume tests",()=>{
    it("should show resume",()=>{
        render(<Resume/>);
        expect(screen.getByLabelText("scalzo-resume")).toBeVisible();
    });
});