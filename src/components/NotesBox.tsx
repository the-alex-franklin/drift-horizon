export const NotesBox = ({ label }: { label: string }) => (
	<div className="relative flex-1 border rounded-lg shadow-sm flex flex-col h-full p-2">
		<div className="absolute -top-3 left-3 bg-white px-2 text-sm font-bold text-gray-600">{label}</div>
		<div className="w-full mt-4 border-none focus:outline-none text-sm resize-none" />
	</div>
);
