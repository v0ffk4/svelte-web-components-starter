import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const webComponents = [
	"src/lib/example-parent.svelte",
	"src/lib/example-child.svelte",
];

export default defineConfig({
	plugins: [
		svelte({
			include: ["src/**/*.svelte"],
			exclude: webComponents,
		}),
		svelte({
			include: webComponents,
			compilerOptions: {
				customElement: true,
			},
		}),
	],
});
