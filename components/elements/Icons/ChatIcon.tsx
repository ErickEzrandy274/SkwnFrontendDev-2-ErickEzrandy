import React from "react";
import { IconProps } from "./interface";
import { useRouter } from "next/router";

const ChatIcon: React.FC<IconProps> = ({
	width = 25,
	height = 25,
	isActive,
}) => {
	const { push } = useRouter();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className="mt-1 scale-110 cursor-pointer"
			fill={isActive ? "#2563eb" : "#9ca3af"}
			onClick={() => push("/chat")}
		>
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
		</svg>
	);
};

export default ChatIcon;
