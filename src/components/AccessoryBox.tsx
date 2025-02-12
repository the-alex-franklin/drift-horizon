export const AccessoryBox = () => (
	<div className="flex flex-col items-start border border-gray-300 rounded-lg p-3 shadow-sm bg-white w-full">
		<div className="w-full relative mb-2">
			<span className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600">
				Accessory Name
			</span>
			<div className="w-full h-8 text-sm border border-gray-300 rounded-md p-2" />
		</div>
		<div className="w-full relative h-16 border border-gray-300 rounded-md p-2">
			<span className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600">
				Notes
			</span>
		</div>
	</div>
);
