import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as RechartsRadarChart } from "recharts";
import { CustomTick } from "./CustomTick.tsx";

const statsData = [
	{ stat: "STR", value: 0 },
	{ stat: "CON", value: 0 },
	{ stat: "AGL", value: 0 },
	{ stat: "INT", value: 0 },
	{ stat: "WIL", value: 0 },
	{ stat: "LCK", value: 0 },
];

export const RadarChart = () => (
	<RechartsRadarChart
		width={380}
		height={380}
		cx="50%"
		cy="50%"
		outerRadius="57%"
		margin={{ bottom: 20 }}
		data={statsData}
		style={{ marginLeft: -30, marginRight: -20, marginTop: 20 }}
	>
		<PolarGrid stroke="#e0e0e0" />
		<PolarAngleAxis
			dataKey="stat"
			tick={CustomTick}
		/>
		<PolarRadiusAxis
			domain={[-1, 10]}
			tick={{ fill: "#888", fontSize: 0, dx: -6, dy: 2, textAnchor: "middle" }}
			ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
			angle={90}
			stroke="#d4d4d4"
		/>
		<Radar
			name="Stats"
			dataKey="value"
			stroke="#d4d4d4"
			fill="#fff"
			strokeOpacity={1}
			fillOpacity={1}
		/>
	</RechartsRadarChart>
);
