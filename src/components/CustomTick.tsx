type PolarAngleAxisTickProps = {
	x: number;
	y: number;
	cx: number;
	cy: number;
	textAnchor: string;
	payload: {
		value: string;
		coordinate: number;
	};
	index: number;
};

export const CustomTick = ({ x, y, payload, cx, cy }: PolarAngleAxisTickProps) => {
	const horizontalFactor = 1.3;
	const verticalFactor = x === cx ? 1.35 : 1.25;
	const horizontalOffset = -30;
	const verticalOffset = -37;
	const deltaX = x - cx;
	const deltaY = y - cy;

	const adjustedX = cx + (deltaX * horizontalFactor) + horizontalOffset;
	const adjustedY = cy + (deltaY * verticalFactor) + verticalOffset;

	return (
		<foreignObject x={adjustedX} y={adjustedY} width={60} height={75}>
			<div className="flex flex-col justify-center items-center w-full h-full bg-white text-black border border-gray-300 rounded-md text-sm font-medium text-center p-1 pt-0">
				{payload.value}
				<div className="h-24 w-full border border-gray" />
			</div>
		</foreignObject>
	);
};
