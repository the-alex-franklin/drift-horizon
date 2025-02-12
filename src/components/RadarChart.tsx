import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as RechartsRadarChart } from "recharts";
import { CustomTick } from "./CustomTick.tsx";

const statsData = [
	{ stat: "CON", value: 0 },
	{ stat: "AGL", value: 0 },
	{ stat: "LCK", value: 0 },
	{ stat: "INT", value: 0 },
	{ stat: "WIL", value: 0 },
	{ stat: "STR", value: 0 },
];

export const RadarChart = () => (
	<div className="flex justify-center items-center h-full">
		<RechartsRadarChart
			width={390}
			height={390}
			cx="50%"
			cy="50%"
			outerRadius="57%"
			data={statsData}
		>
			<PolarGrid stroke="#e0e0e0" />
			<PolarAngleAxis
				dataKey="stat"
				tick={CustomTick}
			/>
			<PolarRadiusAxis
				domain={[-1, 10]}
				tick={{ fill: "#888", fontSize: 12, dx: -6, dy: 2, textAnchor: "middle" }}
				ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
				angle={90}
				stroke="#d4d4d4"
			/>
			<Radar
				name="Stats"
				dataKey="value"
				stroke="#000"
				fill="#31ab29"
				strokeOpacity={0}
				fillOpacity={0}
			/>
		</RechartsRadarChart>
	</div>
);
