import "./CharacterSheet.module.css";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as RechartsRadarChart } from "recharts";
import { CustomTick } from "./components/CustomTick.tsx";

const statsData = [
	{ stat: "STR", value: 0 },
	{ stat: "CON", value: 0 },
	{ stat: "AGL", value: 0 },
	{ stat: "INT", value: 0 },
	{ stat: "WIL", value: 0 },
	{ stat: "LCK", value: 0 },
];

export const CharacterSheet = () => {
	return (
		<div className="w-screen flex flex-col items-center justify-center bg-gray-[900]">
			<div className="p-2 gap-2 flex flex-col bg-white text-black w-[8.5in] h-[11in] border border-gray-300 shadow-md">
				<h1 className="text-3xl font-bold">
					Drift Horizon Character Sheet
				</h1>

				<div className="flex flex-col gap-2 px-2">
					<div className="flex gap-2 justify-between items-start">
						<div className="flex flex-col gap-2 items-center">
							<RechartsRadarChart
								width={380}
								height={380}
								cx="50%"
								cy="50%"
								outerRadius="57%"
								margin={{ bottom: 20 }}
								data={statsData}
								style={{ marginLeft: -30, marginRight: -20, marginTop: 20 }}
							>
								<PolarGrid stroke="#e0e0e0" />
								<PolarAngleAxis
									dataKey="stat"
									tick={CustomTick}
								/>
								<PolarRadiusAxis
									domain={[-1, 10]}
									tick={{ fill: "#888", fontSize: 0, dx: -6, dy: 2, textAnchor: "middle" }}
									ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
									angle={90}
									stroke="#d4d4d4"
								/>
								<Radar
									name="Stats"
									dataKey="value"
									stroke="#d4d4d4"
									fill="#fff"
									strokeOpacity={1}
									fillOpacity={1}
								/>
							</RechartsRadarChart>
						</div>
						<div className="w-1/3 flex flex-col gap-2 pt-4">
							<div className="w-full grid grid-cols-3 gap-2 p-3 border border-gray-300 rounded-md whitespace-nowrap">
								{["Hit Points", "Action Points", "Effort Points", "Dodge Rating", "Armor Rating", "Barrier Rating"].map(
									(
										label,
									) => (
										<div
											key={label}
											className="relative h-16 flex-1 flex flex-col items-center justify-center bg-white p-2 rounded-lg border shadow-sm"
										>
											<span className="absolute -top-2 left-1 bg-white px-1 text-xs font-medium text-gray-600">
												{label}
											</span>
										</div>
									),
								)}
							</div>

							<div className="w-full flex flex-col gap-2">
								<div className="flex flex-col items-start border border-gray-300 rounded-lg p-3 shadow-sm bg-white w-full">
									<div className="w-full relative mb-2">
										<span className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600">
											Armor Name
										</span>
										<div className="w-full h-8 text-sm border border-gray-300 rounded-md p-2" />
									</div>
									<div className="grid grid-cols-3 gap-2 w-full">
										{["Dodge", "Armor", "Barrier"].map((subLabel) => (
											<div key={subLabel} className="flex flex-col w-full relative">
												<span className="absolute -top-2 bg-white px-1 text-xs font-medium text-gray-600 whitespace-nowrap">
													{subLabel}
												</span>
												<div className="w-full h-16 text-sm border border-gray-300 rounded-md p-2" />
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="w-full flex flex-col gap-2">
								<div className="flex flex-col items-start border border-gray-300 rounded-lg p-3 shadow-sm bg-white w-full">
									<div className="w-full relative mb-2">
										<span className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600">
											Weapon Name
										</span>
										<div className="w-full h-8 text-sm border border-gray-300 rounded-md p-2" />
									</div>
									<div className="grid grid-cols-2 gap-2 w-full">
										{["Damage", "Range"].map((subLabel) => (
											<div key={subLabel} className="flex flex-col w-full relative">
												<span className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600">
													{subLabel}
												</span>
												<div className="w-full h-8 text-sm border border-gray-300 rounded-md p-2" />
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-6 gap-1">
						{Array.from(
							{ length: 6 },
							(_, index) => (
								<div
									key={index}
									className="relative h-32 bg-white border border-gray-300 rounded-lg p-1 shadow-sm flex flex-col items-center justify-end text-center"
								>
									<span className="absolute -top-2 left-2 font-medium text-xs text-gray-600 bg-white">
										Ability {index + 1}
									</span>
									<div className="font-mono flex justify-between w-full text-xs mb-1">
										<span>CD:</span>
										{Array.from({ length: 6 }).map((_, idx) => (
											<div key={idx} className="w-4 h-4 border border-gray-600 rounded-full bg-white"></div>
										))}
									</div>
								</div>
							),
						)}
					</div>
				</div>

				<div className="flex flex-1 gap-2 px-2">
					{["Inventory", "Notes"].map((label) => (
						<div key={label} className="relative flex-1 border rounded-lg shadow-sm shadow-black flex flex-col h-full">
							<div className="absolute -top-3 left-2 bg-white px-2 text-gray-600">{label}</div>
							<div className="w-full mt-4 border-none text-sm resize-none" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
