export const NotesBox = ({ label }: { label: string }) => (
	<div className="relative flex-1 border rounded-lg shadow-sm shadow-black flex flex-col h-full">
		<div className="absolute -top-3 left-2 bg-white px-2 text-gray-600">{label}</div>
		<div className="w-full mt-4 border-none focus:outline-none text-sm resize-none" />
	</div>
);
