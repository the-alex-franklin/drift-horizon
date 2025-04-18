export function WeaponSlot() {
	return (
		<div className="flex flex-col items-start border border-gray-300 rounded-lg p-3 shadow-sm bg-white w-full">
			<div className="w-full relative mb-2">
				<span className="absolute -top-2 left-2 bg-white text-xs font-medium text-gray-600">
					Weapon Name
				</span>
				<div className="w-full h-8 text-sm border border-gray-300 rounded-md p-2" />
			</div>
			<div className="grid grid-cols-2 gap-2 w-full">
				{["Damage", "Range"].map((subLabel) => (
					<div key={subLabel} className="flex flex-col w-full relative">
						<span className="absolute -top-2 left-2 bg-white text-xs font-medium text-gray-600">
							{subLabel}
						</span>
						<div className="w-full h-8 text-sm border border-gray-300 rounded-md p-2" />
					</div>
				))}
			</div>
		</div>
	);
}
