import { defineConfig, Plugin } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import windi from "vite-plugin-windicss";

// https://vite.dev/config/
export default defineConfig({
	plugins: <Plugin[][]> [
		deno(),
		react(),
		(windi as any as () => Plugin[])(),
	],
});
