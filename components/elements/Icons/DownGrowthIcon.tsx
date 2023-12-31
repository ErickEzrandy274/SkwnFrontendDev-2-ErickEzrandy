import React from "react";
import { IconProps } from "./interface";

const DownGrowthIcon: React.FC<IconProps> = ({ width = 35, height = 35 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
		>
			<path
				fill="#dc2626"
				d="M21 11a1 1 0 00-1 1v2.59l-6.29-6.3a1 1 0 00-1.42 0L9 11.59l-5.29-5.3a1 1 0 00-1.42 1.42l6 6a1 1 0 001.42 0l3.29-3.3L18.59 16H16a1 1 0 000 2h5a1 1 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0022 17v-5a1 1 0 00-1-1z"
			></path>
		</svg>
	);
};

export default DownGrowthIcon;
