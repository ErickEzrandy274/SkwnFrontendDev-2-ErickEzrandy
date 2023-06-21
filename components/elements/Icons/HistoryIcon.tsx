import React from "react";
import { IconProps } from "./interface";
import { useRouter } from "next/router";

const HistoryIcon: React.FC<IconProps> = ({
	width = 45,
	height = 45,
	isActive,
}) => {
	const { push } = useRouter();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className="scale-75 cursor-pointer"
			fill={isActive ? "#2563eb" : "#9ca3af"}
			onClick={() => push("/history")}
		>
			<path fill="none" d="M0 0h48v48H0z"></path>
			<path
				d="M25.99 6C16.04 6 8 14.06 8 24H2l7.79 7.79.14.29L18 24h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83C16.53 39.98 21.02 42 25.99 42 35.94 42 44 33.94 44 24S35.94 6 25.99 6zM24 16v10l8.56 5.08L34 28.65l-7-4.15V16h-3z"
				opacity="0.9"
			></path>
		</svg>
	);
};

export default HistoryIcon;
