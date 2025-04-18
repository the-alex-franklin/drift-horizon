export function ArmorSlot() {
	return (
		<div className="flex flex-col items-start border border-gray-300 rounded-lg p-3 shadow-sm bg-white w-full">
			<div className="w-full relative mb-2">
				<span className="absolute -top-2 left-2 bg-white text-xs font-medium text-gray-600">
					Armor Name
				</span>
				<div className="w-full h-8 text-sm border border-gray-300 rounded-md p-2" />
			</div>
			<div className="grid grid-cols-3 gap-2 w-full">
				{["Dodge", "Armor", "Barrier"].map((subLabel) => (
					<div key={subLabel} className="flex flex-col w-full relative">
						<span className="absolute -top-2 left-2 bg-white text-xs font-medium text-gray-600 whitespace-nowrap">
							{subLabel}
						</span>
						<div className="w-full h-16 text-sm border border-gray-300 rounded-md p-2" />
					</div>
				))}
			</div>
		</div>
	);
}
