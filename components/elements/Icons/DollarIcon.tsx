import React from "react";
import { IconProps } from "./interface";

const DollarIcon: React.FC<IconProps> = ({ width = 30, height = 30 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 9 16"
		>
			<path
				fill="#2563eb"
				stroke="#2563eb"
				d="M5.5 7.5h-2C2.122 7.5 1 6.378 1 5s1.122-2.5 2.5-2.5h3C7.327 2.5 8 3.173 8 4h1c0-1.378-1.122-2.5-2.5-2.5H5V0H4v1.5h-.5C1.57 1.5 0 3.07 0 5s1.57 3.5 3.5 3.5h2C6.878 8.5 8 9.622 8 11s-1.122 2.5-2.5 2.5h-3c-.827 0-1.5-.673-1.5-1.5H0c0 1.378 1.122 2.5 2.5 2.5H4V16h1v-1.5h.5C7.43 14.5 9 12.93 9 11S7.43 7.5 5.5 7.5z"
			></path>
		</svg>
	);
};

export default DollarIcon;
