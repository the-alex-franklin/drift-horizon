import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterSheet } from "./CharacterSheet.tsx";
import { RandomLootGenerator } from "./RandomLootGenerator.tsx";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/sheet" element={<CharacterSheet />} />
				<Route path="/loot" element={<RandomLootGenerator />} />
			</Routes>
		</BrowserRouter>
	);
}
