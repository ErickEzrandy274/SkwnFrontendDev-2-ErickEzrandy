import React from "react";
import { IconProps } from "./interface";

const TopUpIcon: React.FC<IconProps> = ({ width = 30, height = 30 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 32 32"
		>
			<g data-name="growth graphic arrow diagram graph statistics chart benefit bars">
				<path
					fill="#2563eb"
					d="M5 23h4v5H5zm6-3h4v8h-4zm6-3h4v11h-4zm6-3h4v14h-4z"
				></path>
				<path
					fill="#2563eb"
					d="M27.067 4.887l-5.114.958 2.992.556A58.868 58.868 0 014.829 20.53l.342.94A59.866 59.866 0 0025.632 7.13l.623 2.898z"
				></path>
			</g>
		</svg>
	);
};

export default TopUpIcon;
