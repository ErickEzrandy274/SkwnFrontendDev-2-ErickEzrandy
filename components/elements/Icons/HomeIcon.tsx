import React from "react";
import { IconProps } from "./interface";
import { useRouter } from "next/router";

const HomeIcon: React.FC<IconProps> = ({
	width = 35,
	height = 35,
	isActive,
}) => {
	const { push } = useRouter();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			className="cursor-pointer"
			fill={isActive ? "#2563eb" : "#9ca3af"}
			onClick={() => push("/")}
		>
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>
		</svg>
	);
};

export default HomeIcon;
