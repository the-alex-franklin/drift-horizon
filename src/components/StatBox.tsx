export const StatBox = ({ label }: { label: string }) => (
	<div className="relative h-16 flex-1 flex flex-col items-center justify-center bg-white p-2 rounded-lg border shadow-sm">
		<span className="absolute -top-2 left-1 bg-white px-1 text-xs font-medium text-gray-600">
			{label}
		</span>
	</div>
);
