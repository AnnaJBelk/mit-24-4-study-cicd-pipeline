import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allow using jest-dom matchers
    environment: "jsdom", // Use jsdom for testing React components
  },
});
