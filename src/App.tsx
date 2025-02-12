import "./App.css";
import "virtual:windi.css";
import { WeaponBox } from "./components/WeaponBox.tsx";
import { StatBox } from "./components/StatBox.tsx";
import { NotesBox } from "./components/NotesBox.tsx";
import { RadarChart } from "./components/RadarChart.tsx";
import { AbilityBox } from "./components/AbilityBox.tsx";
import { ArmorBox } from "./components/ArmorBox.tsx";

const CharacterSheet = () => {
	return (
		<div className="w-screen flex flex-col items-center justify-center bg-gray-[900]">
			<div className="p-2 gap-4 flex flex-col bg-white text-black w-[8.5in] h-[11in] border border-gray-300 shadow-md">
				<h1 className="text-3xl font-bold">
					Drift Horizon Character Sheet
				</h1>

				{/* Stats Section with Radar Chart */}
				<div className="relative border rounded-lg shadow-sm shadow-black">
					<h2 className="absolute -top-4 left-2 bg-white text-lg font-semibold text-gray-600">Stats</h2>
					<div className="flex flex-col gap-2 p-2">
						<div className="flex justify-between items-start">
							<RadarChart />
							<div className="flex w-full pt-4 flex-col gap-2">
								<div className="grid grid-cols-3 justify-between p-3 gap-2 border border-gray-300 rounded-md focus:outline-none">
									{["HP", "AP", "WP", "DR", "AR", "BR"].map((label) => <StatBox key={label} label={label} />)}
								</div>

								<div className="flex flex-col gap-2 text-left">
									<ArmorBox label="Armor Name" />
								</div>

								<div className="flex flex-col gap-2 text-left">
									<WeaponBox label="Weapon Name" />
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

				<div className="flex flex-1 gap-4">
					{["Inventory", "Notes"].map((label) => <NotesBox key={label} label={label} />)}
				</div>
			</div>
		</div>
	);
};

export default CharacterSheet;
