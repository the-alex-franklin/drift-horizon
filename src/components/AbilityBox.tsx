export const AbilityBox = ({ index }: { index: number }) => (
	<div className="relative h-36 bg-white border border-gray-300 rounded-lg p-1 shadow-sm flex flex-col items-center justify-end text-center">
		<span className="absolute -top-2 left-2 font-medium text-xs text-gray-600 bg-white">Ability {index + 1}</span>
		{["AP", "CD"].map((label) => (
			<div key={label} className="font-mono flex justify-between w-full text-xs mb-1">
				<span>{label}:</span>
				{Array.from({ length: 6 }).map((_, idx) => (
					<div key={idx} className="w-4 h-4 border border-gray-600 rounded-full bg-white"></div>
				))}
			</div>
		))}
	</div>
);
