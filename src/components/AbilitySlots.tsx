export function AbilitySlots() {
	return (
		<div className="grid grid-cols-6 gap-2">
			{Array.from(
				{ length: 6 },
				(_, index) => (
					<div
						key={index}
						className="relative h-32 bg-white border border-gray-300 rounded-lg shadow-sm flex flex-col items-center justify-end text-center"
					>
						<span className="absolute -top-2.375 left-2 font-medium text-xs text-gray-600 bg-white">
							Ability {index + 1}
						</span>
						<div className="font-mono flex justify-center w-full text-xs mb-1">
							<span className="mr-[2px]">CD:</span>
							{Array.from({ length: 6 }).map((_, idx) => (
								<div key={idx} className="w-4 h-4 border border-gray-600 rounded-full bg-white"></div>
							))}
						</div>
					</div>
				),
			)}
		</div>
	);
}
