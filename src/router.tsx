import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CharacterSheet } from "./CharacterSheet.tsx";
import { RandomLootGenerator } from "./RandomLootGenerator.tsx";

export default function AppRouter() {
	return (
		<>
			<p>Hello world</p>
			<BrowserRouter>
				<Routes>
					<Route path="/sheet" element={<CharacterSheet />} />
					<Route path="/loot" element={<RandomLootGenerator />} />
					<Route path="*" element={<Navigate to="/loot" />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
