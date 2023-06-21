import React from "react";
import { IconProps } from "./interface";

const LeftArrowIcon: React.FC<IconProps> = ({
	width = 25,
	height = 25,
	onClick,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			data-name="Layer 1"
			width={width}
			height={height}
			viewBox="0 0 32 32"
			onClick={onClick}
			className="cursor-pointer"
		>
			<path
				fill="#fff"
				d="M27 14H9.83l6.58-6.59a2 2 0 00-2.82-2.82l-10 10a1.79 1.79 0 00-.25.31 1.19 1.19 0 00-.09.15l-.1.2-.06.2a.84.84 0 000 .17 2 2 0 000 .78.84.84 0 000 .17l.06.2c0 .07.07.13.1.2a1.19 1.19 0 00.09.15 1.79 1.79 0 00.25.31l10 10a2 2 0 002.82-2.82L9.83 18H27a2 2 0 000-4z"
			></path>
		</svg>
	);
};

export default LeftArrowIcon;
