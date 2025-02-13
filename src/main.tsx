import "./index.css";
import "virtual:windi.css";
// @deno-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
import AppRouter from "./router.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
	<AppRouter />,
);
