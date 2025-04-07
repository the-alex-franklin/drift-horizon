import { WeaponSlot } from "./components/WeaponSlot.tsx";
import { StatBlock } from "./components/StatBlock.tsx";
import { ArmorSlot } from "./components/ArmorSlot.tsx";
import { RadarGraph } from "./components/RadarGraph.tsx";
import { AbilitySlots } from "./components/AbilitySlots.tsx";

export const CharacterSheet = () => {
	return (
		<div className="w-screen flex flex-col items-center justify-center bg-gray-[900]">
			<div className="p-8 gap-2 flex flex-col bg-white text-black w-[8.5in] h-[11in] border border-gray-300 shadow-md">
				<h1 className="text-3xl font-bold">
					Drift Horizon Character Sheet
				</h1>

				<div className="flex flex-col gap-2 h-75">
					<div className="flex gap-2 justify-end">
						{/* <CharacterPortrait /> */}
						<RadarGraph />
						<div className="w-1/3 flex flex-col gap-2">
							<StatBlock />
							<WeaponSlot />
						</div>
						<div className="w-1/3 flex flex-col gap-2">
							<ArmorSlot />
						</div>
					</div>
				</div>

				<AbilitySlots />

				<div className="flex flex-1 gap-2">
					{["Inventory", "Notes"].map((label) => (
						<div key={label} className="relative flex-1 border rounded-lg shadow-sm shadow-black flex flex-col h-full">
							<div className="absolute -top-1 left-2 bg-white px-2 text-gray-600 leading-[8px]">{label}</div>
							<div className="w-full mt-4 border-none text-sm resize-none" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
