import { extname, join } from "https://deno.land/std@0.224.0/path/mod.ts";

const distDir = import.meta.dirname!;
const indexPath = join(distDir, "index.html");

// Helper function to determine MIME type
function getContentType(filePath: string): string {
	const ext = extname(filePath);
	return {
		".html": "text/html",
		".js": "application/javascript",
		".css": "text/css",
		".json": "application/json",
		".png": "image/png",
		".jpg": "image/jpeg",
		".svg": "image/svg+xml",
	}[ext] || "application/octet-stream"; // Default to binary stream if type is unknown
}

// Server logic
Deno.serve(async (req) => {
	const url = new URL(req.url);
	const filePath = join(distDir, url.pathname);

	try {
		// Try to serve the requested static file
		const file = await Deno.readFile(filePath);
		const contentType = getContentType(filePath);
		console.log({ contentType });
		return new Response(file, { headers: { "Content-Type": contentType } });
	} catch {
		// If the file doesn't exist, fallback to index.html
		if (url.pathname !== "/favicon.ico") {
			const html = await Deno.readFile(indexPath);
			return new Response(html, { headers: { "Content-Type": "text/html" } });
		} else {
			return new Response("Not Found", { status: 404 });
		}
	}
});
