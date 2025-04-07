export function CharacterPortrait() {
	return (
		<div className="w-1/3 flex flex-col gap-2 pt-4 items-center relative">
			<div className="w-7/8 h-72 bg-gray-200 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center z-1">
				<span className="text-gray-500">Character Portrait</span>
			</div>

			<div className="bg-blue-500 border-blue-800 border border-[2px] rounded h-69 w-32 absolute right-0 top-10" />
			<div className="bg-gray-500 border-gray-800 border border-[2px] rounded h-69 w-32 absolute left-0 top-10" />
			<div className="bg-red-500 w-7/8 h-4 absolute bottom-0 z-1 border border-red-800 border-[2px] rounded" />
		</div>
	);
}
