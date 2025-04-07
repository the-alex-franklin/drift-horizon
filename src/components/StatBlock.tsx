export function StatBlock() {
	return (
		<div className="w-full grid grid-cols-3 gap-2 p-3 border border-gray-300 rounded-md whitespace-nowrap">
			{["Hit Points", "Action Points", "Effort Points", "Dodge Rating", "Armor Rating", "Barrier Rating"].map(
				(label) => (
					<div
						key={label}
						className="relative h-16 flex-1 flex flex-col items-center justify-center bg-white p-2 rounded-lg border shadow-sm"
					>
						<span className="absolute -top-2 left-0 bg-white text-xs font-medium text-gray-600">
							{label}
						</span>
					</div>
				),
			)}
		</div>
	);
}
