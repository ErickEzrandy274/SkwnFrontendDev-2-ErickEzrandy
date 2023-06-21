import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
	PointElement,
	LineElement,
	BarElement,
	CategoryScale,
	LinearScale,
	ChartDataLabels
);

ChartJS.defaults.font.weight = "bold";
ChartJS.defaults.font.size = 15;
ChartJS.defaults.color = "black";

const data = {
	labels: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	],

	datasets: [
		{
			label: "Cubic interpolation",
			data: [
				200000, 1200000, 2900000, 1000000, 2100000, 2950000, 1800000, 3900000,
				900000, 1750000, 3750000, 2400000,
			],
			borderColor: "#2563eb",
			fill: false,
			tension: 0.6,
		},
	],
};

const config = {
	type: "line",
	data: data,
	options: {
		responsive: true,
		plugins: {
			datalabels: {
				display: false,
			},
		},
		interaction: {
			intersect: false,
		},
		scales: {
			x: {
				display: true,
				title: {
					display: true,
				},
			},
			y: {
				display: true,
			},
		},
	},
};

const Interpolation = () => {
	return (
		<section className="w-screen md:w-[50rem]">
			<Line {...config} />
		</section>
	);
};

export default Interpolation;
