import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // @ts-expect-error Overloads
    test: {
        environment: "jsdom",
        setupFiles: ["src/__test__/setup.ts"],
        testMatch: ["src/__test__/**/*.test.tsx"],
        globals: true,
    },
    server: {
        port: 3000,
        proxy: {"/api": "http://localhost:8080"},
    },
});