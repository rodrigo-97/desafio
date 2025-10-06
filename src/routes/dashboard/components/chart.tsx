import type React from "react";
import { useMemo } from "react";
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, LineChart } from "recharts";
import { t } from "@/lib/config";

export const Chart: React.FC = () => {
	const data = useMemo(
		() => [
			{
				name: "",
				uv: 8200,
				pv: -8200,
				amt: 2400,
			},
			{
				name: "",
				uv: 7400,
				pv: 1398,
				amt: 2210,
			},
			{
				name: "",
				uv: 0,
				pv: 9800,
				amt: 2290,
			},
			{
				name: "",
				uv: 17000,
				pv: -17000,
				amt: 2000,
			},
			{
				name: "",
				uv: 100,
				pv: -7800,
				amt: 2181,
			},
			{
				name: "",
				uv: 200,
				pv: 0,
				amt: 2500,
			},
			{
				name: "",
				uv: 7800,
				pv: 0,
				amt: 2100,
			},
			{
				name: "",
				uv: 300,
				pv: 0,
				amt: 2100,
			},
			{
				name: "",
				uv: 100,
				pv: 0,
				amt: 2100,
			},
			{
				name: "",
				uv: 350,
				pv: 0,
				amt: 2100,
			},
			{
				name: "",
				uv: 800,
				pv: 0,
				amt: 2100,
			},
			{
				name: "",
				uv: 17000,
				pv: 0,
				amt: 2100,
			},
		],
		[],
	);

	return (
		<>
			<p className="uppercase text-subtle font-bold mb-3">{t("pages.dashboard.chart.title")}</p>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#95c1c9" />
					<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};
