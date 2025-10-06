import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 5555,
	},
	resolve: {
		alias: {
			"@": path.resolve("./src"),
		},
	},
	plugins: [react(), tailwindcss()],
});
