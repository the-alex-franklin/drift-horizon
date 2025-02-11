export const AbilityBox = ({ index }: { index: number }) => (
	<div className="bg-white border border-gray-300 rounded-lg p-1 shadow-sm flex flex-col items-center justify-center text-center">
		<span className="font-medium text-xs mb-1">Ability {index + 1}</span>
		<div className="w-full h-24 text-center border border-gray-300 rounded-md focus:outline-none text-xs mb-1" />
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
