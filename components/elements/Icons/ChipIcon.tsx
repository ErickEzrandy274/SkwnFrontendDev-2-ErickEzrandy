import React from "react";
import { VisaIconProps } from "./interface";

const ChipIcon: React.FC<VisaIconProps> = ({
	width = 45,
	height = 45,
	isPremium,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
		>
			<path
				fill={isPremium ? "#ffffff" : "#2563eb"}
				d="M16.98 4H7.01A3.014 3.014 0 004 7.01v9.97A3.025 3.025 0 007.02 20h9.97A3.014 3.014 0 0020 16.99V7.02A3.025 3.025 0 0016.98 4zM10 5h4v4h-4V5zM9 19H7.02A2.023 2.023 0 015 16.98V15h4v4zm5 0h-4v-4h4v4zm5-2.01A2.012 2.012 0 0116.99 19H15v-4h4v1.99zM19 14H5V7.01C5.001 5.9 5.9 5 7.01 5H9v4.5a.5.5 0 00.5.5H19v4zm0-5h-4V5h1.98A2.023 2.023 0 0119 7.02V9z"
				className="color000000 svgShape"
			></path>
		</svg>
	);
};

export default ChipIcon;
