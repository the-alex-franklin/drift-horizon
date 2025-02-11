import "./App.css";
import "virtual:windi.css";
import { WeaponBox } from "./components/WeaponBox.tsx";
import { StatBox } from "./components/StatBox.tsx";
import { NotesBox } from "./components/NotesBox.tsx";
import { RadarChart } from "./components/RadarChart.tsx";
import { AbilityBox } from "./components/AbilityBox.tsx";
import { ArmorBox } from "./components/ArmorBox.tsx";

const CharacterSheet = () => {
	const statsData = [
		{ stat: "STR", value: 0 },
		{ stat: "CON", value: 0 },
		{ stat: "AGI", value: 0 },
		{ stat: "CUN", value: 0 },
		{ stat: "INT", value: 0 },
		{ stat: "WIL", value: 0 },
	];

	return (
		<div className="w-screen flex flex-col items-center justify-center bg-gray-900">
			<div className="p-2 flex flex-col gap-2 bg-white text-black w-[8.5in] h-[11in] border border-gray-300 shadow-md">
				<h1 className="text-2xl font-bold text-left border-b border-gray-400">
					Drift Horizon Character Sheet
				</h1>

				{/* Stats Section with Radar Chart */}
				<div className="border rounded-lg shadow-sm shadow-black">
					<h2 className="text-lg font-bold border-b border-gray-400 text-center">Stats & Equipment</h2>
					<div className="flex flex-col gap-2 p-2">
						<div className="flex justify-between items-start">
							<RadarChart statsData={statsData} />
							<div className="flex w-full pt-4 flex-col gap-2">
								<div className="flex justify-between p-3 gap-2 border border-gray-300 rounded-md focus:outline-none">
									{["Hit Points", "Armor", "Barrier", "Dodge"].map((label) => <StatBox key={label} label={label} />)}
								</div>

								<div className="flex flex-col gap-2 text-left">
									<ArmorBox label="Armor Name" />
								</div>

								<div className="flex flex-col gap-2 text-left">
									<WeaponBox label="Weapon Name" />
								</div>
							</div>
						</div>

						<div className="grid grid-cols-6 gap-1">
							{Array.from({ length: 6 }, (_, index) => <AbilityBox key={index} index={index} />)}
						</div>
					</div>
				</div>

				<div className="flex flex-col flex-1 border rounded-lg shadow-sm shadow-black">
					<h2 className="text-lg font-bold border-b border-gray-400">Inventory & Notes</h2>
					<div className="flex flex-1 gap-4 mt-4">
						{["Inventory", "Notes"].map((label) => <NotesBox key={label} label={label} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterSheet;
